import datetime
import json
import uuid
import time
import io
import os
import csv
import zipfile
import tempfile
import pandas as pd
from flask import Flask, redirect, render_template, request, jsonify
from config import gch

user_data_folder = 'hpwc-user-inputs/'

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

@app.route('/about', methods=['GET'])
def test():
    return render_template('about.html')

@app.route('/advanced', methods=['GET'])
def advanced():
    return render_template('advanced.html')

@app.route('/references', methods=['GET'])
def references():
    return render_template('references.html')

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
    # yearly_harvest_input.seek(0, os.SEEK_END)
    # print(yearly_harvest_input.tell())
    print(yearly_harvest_input.filename)
    if(yearly_harvest_input.filename != ''):
        yearly_harvest_input = pd.read_csv(yearly_harvest_input)
        
        if(yearly_harvest_input.keys()[0] != 'Year' or yearly_harvest_input.keys()[1] != "ccf"):
            print("data no good")
            yearly_harvest_input = yearly_harvest_input.melt(id_vars="YearID",
                                                                var_name="Year",
                                                                value_name="ccf")
            yearly_harvest_input= yearly_harvest_input[yearly_harvest_input['ccf'] != 0]
            print(yearly_harvest_input)
            with tempfile.NamedTemporaryFile() as fp:
                yearly_harvest_input.to_csv(fp.name, index=False)
                yearly_harvest_input = fp
        else: 
            # yearly_harvest_input.to_csv("/tmp/yearly_harvest_data.csv", index=False)
            with tempfile.NamedTemporaryFile() as fp:
                yearly_harvest_input.to_csv(fp.name, index=False)
                yearly_harvest_input = fp
        
    harvest_data_type = request.form['harvestdatatype']
    timber_product_ratios = request.files['yearlytimberproductratios']

    if(timber_product_ratios.filename != ''):
        timber_product_ratios = pd.read_csv(timber_product_ratios)
        if(timber_product_ratios.keys()[0] != 'TimberProductID' or timber_product_ratios.keys()[1] != "Year" or timber_product_ratios.keys()[2] != "Ratio"):
            print("no good")
            timber_product_ratios = timber_product_ratios.melt(id_vars="TimberProductID",
                                                                     var_name="Year",
                                                                     value_name="Ratio")
            with tempfile.NamedTemporaryFile() as fp:
                timber_product_ratios.to_csv(fp.name, index=False)
                timber_product_ratios = fp
        else:
            with tempfile.NamedTemporaryFile() as fp:
                timber_product_ratios.to_csv(fp.name, index=False)
                timber_product_ratios = fp
    region_selection = request.form['regionselection']
    if(region_selection == "Custom"):
        custom_region_file = request.files['customregion']
        if(custom_region_file.filename != ''):
            custom_region_file = pd.read_csv(custom_region_file)
            if(custom_region_file.keys()[0] != 'PrimaryProductID' or custom_region_file.keys()[1] != "Year" or custom_region_file.keys()[2] != "Ratio"):
                custom_region_file = custom_region_file.melt(id_vars="PrimaryProductID",
                                                                        var_name="Year",
                                                                        value_name="Ratio")
                
                with tempfile.NamedTemporaryFile() as fp:
                    custom_region_file.to_csv(fp.name, index=False)
                    custom_region_file = fp
            else:
                with tempfile.NamedTemporaryFile() as fp:
                    custom_region_file.to_csv(fp.name, index=False)
                    custom_region_file = fp
    else:
        custom_region_file = ""
    end_use_product_ratios = request.files['EndUseRatiosFilename']
    if(end_use_product_ratios.filename != ''):
        end_use_product_ratios = pd.read_csv(end_use_product_ratios)
        if(end_use_product_ratios.keys()[0] != 'EndUseID' or end_use_product_ratios.keys()[1] != "Year" or end_use_product_ratios.keys()[2] != "Ratio"):
            end_use_product_ratios = end_use_product_ratios.melt(id_vars="EndUseID",
                                                                    var_name="Year",
                                                                    value_name="Ratio")
            with tempfile.NamedTemporaryFile() as fp:
                end_use_product_ratios.to_csv(fp.name, index=False)
                end_use_product_ratios = fp
        else:
            with tempfile.NamedTemporaryFile() as fp:
                custom_region_file.to_csv(fp.name, index=False)
                custom_region_file = fp
    # end_use_half_lives = request.files['EndUseHalfLivesFilename']
    dispositions = request.files['DispositionsFilename']
    # disposition_half_lives = request.files['DispositionHalfLivesFilename']
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
            "distribution_data.csv":distribution_data,
            "burned_ratios.csv":burned_ratios,
            "mbf_to_ccf.csv":mbf_to_ccf,
            "loss_factor":loss_factor,
            "iterations":iterations,
            "email":email,
            "run_name":run_name
            }
    print(data)

    # The file type is recorded to check between different data types in the GcsHelper.upload_input_group() method.
    data_type = type(harvest_data_type)
    new_id = str(uuid.uuid4())
    # print(new_id)
    upload_input_group("hwpcarbon-data", user_data_folder + new_id + '/', data , data_type)
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
    user_zip = gch.download_temp("hwpcarbon-data","hpwc-user-inputs/"+p+"/results/test.zip")
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
            if "swds_mgc" in file:
                swds_mgc=test
            if "swds_co2e" in file:
                swds_co2e=test
            if "products_in_use_mgc" in file:
                products_in_use_mgc = test
            if "products_in_use_co2e" in file:
                products_in_use_co2e = test
    total_cumulative_carbon_stocks_mgc = swds_mgc.merge(products_in_use_mgc, on='Year')
    data_dict["total_cumulative_carbon_stocks_mgc"] = total_cumulative_carbon_stocks_mgc
    total_cumulative_carbon_stocks_co2e = swds_co2e.merge(products_in_use_co2e, on='Year')
    data_dict["total_cumulative_carbon_stocks_co2e"] = total_cumulative_carbon_stocks_co2e
    data_json=json.dumps(data_dict)
    data_json = data_json.replace('\\"',' ')

    return render_template("pages/output.html",data_json=data_json)

#FOR TESTING PURPOSES DELETE WHEN DONE
def upload_input_group(bucket_name, source_file_name, data, data_type):
        """[summary]
        This helper function that uploads a data cluster of user inputs to a unique folder, likely named with a user generated hash id.

        This function is specially modified and used in hwpc-web

        Args:
            bucket_name ([type]): The name of the destination bucket you are uploading to.
            source_file_name ([type]): The name of the destination folder for the user date, this consists of "hwpc-user-inputs" and the user's generated id.
            data ([type]): The data to be delivered to the destination folder.
            data_type ([type]): A logic check for harvested_wood_products.
        """
        
        data_json = {}
        # Code parses through data pulled from web
        for key,value in data.items():
            # If the input type is not a file type, it will write a text file with information and push it up to cloud storage
            print("this"+str(type(value)))
            print(value)
            if str(type(value)) != "<class 'tempfile._TemporaryFileWrapper'>":
                print("in here")
                # If the input is not empty, it will make the file and upload. If it is empty, it will be skipped and save memory.
                if (value != ""):
                    path = source_file_name+key
                    temp = value.encode()
                    temp_file = tempfile.TemporaryFile()
                    temp_file.write(temp)
                    temp_file.seek(0)
                    data_json[key]=path
                    gch.upload_temp(bucket_name, temp_file, path)
                    temp_file.close()
            # If it is a file type, it will directly upload the file instead
            else:
                # If the input is not empty, it will make the file and upload. If it is empty, it will be skipped and save memory.
                print( type(value))
            # if  type(value) == "<class 'tempfile._TemporaryFileWrapper'>":
                path = source_file_name+key
                data_json[key]=path
                    # gch.upload_temp(bucket_name, value, path)
            
        # The json of all the file paths is converted into a string then to bytes to be uploaded as a temp file for use in the worker.
        data_json = json.dumps(data_json)
        data_json = data_json.encode()
        user_file = tempfile.TemporaryFile()
        user_file.write(data_json)
        user_file.seek(0)
        print(bre)
        gch.upload_temp(bucket_name, user_file, source_file_name + "user_input.json")
        user_file.close()
        return
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