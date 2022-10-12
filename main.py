import json
import uuid
import os
import zipfile
from datetime import datetime
import pandas as pd
import numpy as np
import tempfile
from io import StringIO
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
            start_year = str(yearly_harvest_input["Year"][len(yearly_harvest_input["Year"]) -1])
            stop_year = str(yearly_harvest_input["Year"][0])
            yearly_harvest_input = yearly_harvest_input.to_csv(index=False)
        else: 
            start_year = str(yearly_harvest_input["Year"][len(yearly_harvest_input["Year"]) -1])
            stop_year = str(yearly_harvest_input["Year"][0])
            print(start_year)
            yearly_harvest_input = yearly_harvest_input.to_csv(index=False)
        
    harvest_data_type = request.form['harvestdatatype']
    timber_product_ratios = request.files['yearlytimberproductratios']

    if(timber_product_ratios.filename != ''):
        timber_product_ratios = pd.read_csv(timber_product_ratios)
        if(timber_product_ratios.keys()[0] != 'TimberProductID' or timber_product_ratios.keys()[1] != "Year" or (timber_product_ratios.keys()[2] != "Ratio" and timber_product_ratios.keys()[2] != "TimberProductRatio")):
            timber_product_ratios = timber_product_ratios.melt(id_vars="TimberProductID",
                                                                     var_name="Year",
                                                                     value_name="Ratio")
            timber_product_ratios = timber_product_ratios.to_csv(index=False) 
            print(timber_product_ratios)
        else:
            timber_product_ratios = timber_product_ratios.to_csv(index=False)
            print(timber_product_ratios)
            
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
            
    if request.form.get('enduseproductrates'):
        end_use_product_rates = request.form['enduseproductrates']

    dispositions = request.files['DispositionsFilename']
    disposition_half_lives = request.files['DispositionHalfLivesFilename']
    distribution_data = request.files['DistributionDataFilename']
    burned_ratios = request.files['BurnedRatiosFilename']
    mbf_to_ccf = request.files['MbfToCcfFilename']
    loss_factor = request.form['lossfactor']
    iterations = request.form['iterations']
    email = request.form['email']
    run_name = request.form['runname']

    now = datetime.now()
    dt_string = now.strftime("%d-%m-%YT%H:%M:%S")
    new_id = str(uuid.uuid4())
    # The data is compiled to a dictionary to be processed with the GcsHelper class
    data = {
            "harvest_data.csv":yearly_harvest_input,
            "harvest_data_type":harvest_data_type,
            "timber_product_ratios.csv":timber_product_ratios,
            "region":region_selection,
            "primary_product_ratios.csv":custom_region_file,
            "end_use_product_ratios.csv":end_use_product_ratios,
            "decay_function":end_use_product_rates,
            "discard_destinations.csv":dispositions,
            "discard_destination_ratios.csv":disposition_half_lives,
            # "distribution_data.csv":distribution_data,
            "discard_burned_w_energy_capture.csv":burned_ratios,
            "mbf_to_ccf_conversion.csv":mbf_to_ccf,
            "end_use_loss_factor":loss_factor,
            "iterations":iterations,
            "email":email,
            "scenario_name":run_name,
            "simulation_date":dt_string,
            "start_year":start_year,
            "end_year":stop_year,
            "user_string": new_id
            }

    # The file type is recorded to check between different data types in the GcsHelper.upload_input_group() method.
    
    # print(new_id)
    S3Helper.upload_input_group("hwpc", user_data_folder + new_id + '/', data)
    #return "This is a test to view the submitted data"   
    # return render_template('pages/submit.html', file_path=user_data_folder + new_id + '/', run_name=run_name, run_path = 'https://hwpc-calculator-3d43jw4gpa-uw.a.run.app' + '/?p=' + user_data_folder + new_id + '&q=' + run_name)
    return render_template('pages/submit.html')

@app.route('/submit')
def submit():
    return render_template("pages/submit.html")

@app.route("/set-official", methods=['GET'])
def set_official():
    p = request.args.get("p")
    data_json = S3Helper.download_file("hwpc","hwpc-user-inputs/" + p + "/user_input.json")
    deliver_json = {}
    with open(data_json.name,"r+") as f:
        data = json.load(f)
        data["is_official_record"] = "true"
        deliver_json = json.dumps(data)
    deliver_json = deliver_json.encode()
    user_file = tempfile.TemporaryFile()
    user_file.write(deliver_json)
    user_file.seek(0)
    S3Helper.upload_file(user_file, "hwpc", "hwpc-user-inputs/" + p + "/user_input.json")
    user_file.close()
    return

@app.route('/output', methods=['GET'])
def output():
    swds_mgc=""
    sdws_co2e=""
    products_in_use_mgc=""
    products_in_use_co2e=""
    is_single = "false"
    p = request.args.get("p")
    q = request.args.get("q")
    y = request.args.get("y")
    print(p)
    print(q)
    data_dict = {}
    if(y==None):
        print("no year range")
        
        
        user_zip = S3Helper.read_zipfile("hwpc-output","hwpc-user-outputs/"+p+"/results/"+q+".zip")
        # print(user_zip)
        for file in user_zip:
            if ".csv" in file and "results" not in file:
                print(file[:-4])
                print(user_zip[file])
                csvStringIO = StringIO(user_zip[file])
                test = pd.read_csv(csvStringIO, sep=",", header=0)
                try:
                    test = test.drop(columns="DiscardDestinationID")
                except:
                    print("no column")
                test.drop(test.tail(1).index,inplace=True)
                # test = test.replace(0, np.nan)
                # test.dropna(inplace = True)
            
                print(test)
                test = test.loc[:, ~test.columns.str.contains('^Unnamed')]
                data_dict[file[:-4]] = test.to_csv(index=False)
                
        print(data_dict.keys())
        data_json=json.dumps(data_dict)
        
        data_json = data_json.replace('\\"',' ')
    if(y!=None):
        print("years: "+y)
        is_single = "true"
        user_zip = S3Helper.read_zipfile("hwpc-output","hwpc-user-outputs/"+p+"/results/"+y+"_"+q+".zip")
        
        for file in user_zip:
            if ".csv" in file and y in file and "results" not in file:
                print(file[:-4])
                csvStringIO = StringIO(user_zip[file])
                test = pd.read_csv(csvStringIO, sep=",", header=0)
                try:
                    test = test.drop(columns="DiscardDestinationID")
                except:
                    print("no column")
                # test = test.replace(0, np.nan)
                # test.dropna(inplace = True)
                test.drop(test.tail(1).index,inplace=True)
                print(test)
                test = test.loc[:, ~test.columns.str.contains('^Unnamed')]
                data_dict[file[5:-4]] = test.to_csv(index=False)
        print(data_dict.keys())
        data_json=json.dumps(data_dict)
        
        data_json = data_json.replace('\\"',' ')
    # print(y)
    

    return render_template("pages/output.html",data_json=data_json,bucket=p,file_name=q,is_single=is_single)

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