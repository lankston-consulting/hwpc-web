import json
import uuid
import os
import zipfile
import pandas as pd
from flask import Flask, redirect, render_template, request, jsonify
# from config import gch
from utils.s3_helper import S3Helper

user_data_folder = 'hwpc-user-inputs/'

app = Flask(__name__, template_folder="templates")

#Routing for html template files
@app.route('/')
@app.route('/index')
@app.route('/home', methods=['GET'])
def home():
    return render_template('pages/home.html')

@app.route('/calculator', methods=['GET'])
def calculator():
    return render_template('pages/calculator.html')

# @app.route('/output', methods=['GET'])
# def output():
#     return render_template('pages/output.html')

@app.route('/reference', methods=['GET'])
def test():
    return render_template('pages/reference.html')

@app.route('/privacy', methods=['GET'])
def advanced():
    return render_template('pages/privacy.html')

@app.route('/terms', methods=['GET'])
def references():
    return render_template('pages/terms.html')

@app.route('/contact', methods=['GET'])
def contact():
    return render_template('contact.html')

@app.route('/files', methods=['GET'])
def files():
    return render_template('files.html')

@app.route('/upload', methods=['GET','POST'])
def upload():
    # All inputs from the UI are pulled here through with jquery Ajax
    yearly_harvest_input = request.files['yearlyharvestinput']
    if(yearly_harvest_input.filename != ''):
        yearly_harvest_input = pd.read_csv(yearly_harvest_input)
        
        if(yearly_harvest_input.keys()[0] != 'Year' or yearly_harvest_input.keys()[1] != "ccf"):
            yearly_harvest_input = yearly_harvest_input.melt(id_vars="YearID",
                                                                var_name="Year",
                                                                value_name="ccf")
            yearly_harvest_input= yearly_harvest_input[yearly_harvest_input['ccf'] != 0]
            yearly_harvest_input = yearly_harvest_input.to_csv(index=False)
        else: 
            yearly_harvest_input = yearly_harvest_input.to_csv(index=False)     
        
    harvest_data_type = request.form['harvestdatatype']
    timber_product_ratios = request.files['yearlytimberproductratios']

    if(timber_product_ratios.filename != ''):
        timber_product_ratios = pd.read_csv(timber_product_ratios)
        if(timber_product_ratios.keys()[0] != 'TimberProductID' or timber_product_ratios.keys()[1] != "Year" or timber_product_ratios.keys()[2] != "Ratio"):
            timber_product_ratios = timber_product_ratios.melt(id_vars="TimberProductID",
                                                                     var_name="Year",
                                                                     value_name="Ratio")
            timber_product_ratios = timber_product_ratios.to_csv(index=False) 
        else:
            timber_product_ratios = timber_product_ratios.to_csv(index=False)
            
    region_selection = request.form['regionselection']
    if(region_selection == "Custom"):
        custom_region_file = request.files['customregion']
        if(custom_region_file.filename != ''):
            custom_region_file = pd.read_csv(custom_region_file)
            if(custom_region_file.keys()[0] != 'PrimaryProductID' or custom_region_file.keys()[1] != "Year" or custom_region_file.keys()[2] != "Ratio"):
                custom_region_file = custom_region_file.melt(id_vars="PrimaryProductID",
                                                                        var_name="Year",
                                                                        value_name="Ratio")
                custom_region_file = custom_region_file.to_csv(index=False)
            else:
                custom_region_file = custom_region_file.to_csv(index=False)
                
    else:
        custom_region_file = ""
    end_use_product_ratios = request.files['EndUseRatiosFilename']
    if(end_use_product_ratios.filename != ''):
        end_use_product_ratios = pd.read_csv(end_use_product_ratios)
        if(end_use_product_ratios.keys()[0] != 'EndUseID' or end_use_product_ratios.keys()[1] != "Year" or end_use_product_ratios.keys()[2] != "Ratio"):
            end_use_product_ratios = end_use_product_ratios.melt(id_vars="EndUseID",
                                                                    var_name="Year",
                                                                    value_name="Ratio")
            end_use_product_ratios = end_use_product_ratios.to_csv(index=False)
        else:
            end_use_product_ratios = end_use_product_ratios.to_csv(index=False)
            
    dispositions = request.files['DispositionsFilename']
    disposition_half_lives = request.files['DispositionHalfLivesFilename']
    distribution_data = request.files['DistributionDataFilename']
    burned_ratios = request.files['BurnedRatiosFilename']
    mbf_to_ccf = request.files['MbfToCcfFilename']
    loss_factor = request.form['lossfactor']
    iterations = request.form['iterations']
    email = request.form['email']
    run_name = request.form['runname']

    # The data is compiled to a dictionary to be processed with the GcsHelper class
    data = {
            "harvest_data.csv":yearly_harvest_input,
            "harvest_data_type":harvest_data_type,
            "timber_product_ratios.csv":timber_product_ratios,
            "region":region_selection,
            "primary_product_ratios.csv":custom_region_file,
            "end_use_product_ratios.csv":end_use_product_ratios,
            "dispositions.csv":dispositions,
            "disposition_half_lives.csv":disposition_half_lives,
            "distribution_data.csv":distribution_data,
            "burned_ratios.csv":burned_ratios,
            "mbf_to_ccf.csv":mbf_to_ccf,
            "loss_factor":loss_factor,
            "iterations":iterations,
            "email":email,
            "run_name":run_name
            }

    # The file type is recorded to check between different data types in the GcsHelper.upload_input_group() method.
    new_id = str(uuid.uuid4())
    # print(new_id)
    S3Helper.upload_input_group("hwpc", user_data_folder + new_id + '/', data)
    #return "This is a test to view the submitted data"   
    # return render_template('pages/submit.html', file_path=user_data_folder + new_id + '/', run_name=run_name, run_path = 'https://hwpc-calculator-3d43jw4gpa-uw.a.run.app' + '/?p=' + user_data_folder + new_id + '&q=' + run_name)
    return render_template('pages/submit.html')

@app.route('/submit')
def submit():
    return render_template("pages/submit.html")

@app.route('/output', methods=['GET'])
def output():
    swds_mgc=""
    sdws_co2e=""
    products_in_use_mgc=""
    products_in_use_co2e=""
    p = request.args.get("p")
    print(p)
    user_zip = S3Helper.download_file("hpwc-output","hwpc-user-outputs/"+p+"/test.zip")
    #user_zip = S3Helper.download_file("hwpc","hwpc-user-inputs/"+p+"/harvest_data.csv")

    with open('/tmp/zip_folder.zip', 'wb') as f:
        f.write(user_zip.read())
    file = zipfile.ZipFile('/tmp/zip_folder.zip')
    file.extractall(path='/tmp/zip_folder')
    files = os.listdir('/tmp/zip_folder')
    data_dict = {}
    for file in files:
        if ".csv" in file:
            print(file[:-4])
            test = pd.read_csv("/tmp/zip_folder/"+file)
            test = test.loc[:, ~test.columns.str.contains('^Unnamed')]
            data_dict[file[:-4]] = test.to_csv(index=False)
            # if "swds_mgc" in file:
            #     swds_mgc=test
            # if "swds_co2e" in file:
            #     swds_co2e=test
            # if "products_in_use_mgc" in file:
            #     products_in_use_mgc = test
            # if "products_in_use_co2e" in file:
            #     products_in_use_co2e = test
    # total_cumulative_carbon_stocks_mgc = swds_mgc.merge(products_in_use_mgc, on='Year')
    # data_dict["total_cumulative_carbon_stocks_mgc"] = total_cumulative_carbon_stocks_mgc.to_csv(index=False)
    # total_cumulative_carbon_stocks_co2e = swds_co2e.merge(products_in_use_co2e, on='Year')
    # data_dict["total_cumulative_carbon_stocks_co2e"] = total_cumulative_carbon_stocks_co2e.to_csv(index=False)
    data_json=json.dumps(data_dict)
    print(data_json)
    data_json = data_json.replace('\\"',' ')

    return render_template("pages/output.html",data_json=data_json)

# @app.route('/download', methods=['GET','POST'])
# def download():
    
#     file_path = request.form['file_path']
#     run_name = request.form['run_name']
#     #TEST DEFAULT PATH = hpwc-user-inputs/user_request_20210927_193455
#     download_zip(file_path,run_name)
#     time.sleep(5)
    
#     return render_template('homecontent.html')

# def download_zip(file_path, run_name):
#     timeout_counter = 0
#     while gch.check_file_exists_on_cloud('hwpcarbon-data',file_path + "results/"+run_name+".zip") is False :
#         print("Its not loaded yet")
#         time.sleep(5)
#         timeout_counter += 1
#         if(timeout_counter >=50):
#             print("Error loading Data")
#             break
#     print("Its loaded")
#     print(file_path + "results/"+run_name+".zip")
#     #gch.download_blob('hwpcarbon-data',file_path + "results/"+run_name+".zip",run_name+".zip")
#     #https://storage.googleapis.com/hwpcarbon-data/hpwc-user-inputs/6cfb9126-2909-4658-83b4-82e710a64748/results/rtt.zip

#     full_path = ""
#     run_path = "https://storage.googleapis.com/hwpcarbon-data/" + file_path + "results/"+run_name+".zip"
#     return render_template('results.html', full_path=full_path, run_path=run_path)
    


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.

    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 8080)), debug=True)