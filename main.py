import datetime
import json
import uuid
import time
import os
from flask import Flask, redirect, render_template, request
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

@app.route('/how-it-works', methods=['GET'])
def howitworks():
    return render_template('pages/how-it-works.html')


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
    harvest_data_type = request.form['harvestdatatype']
    yearly_timber_product_ratios = request.files['yearlytimberproductratios']
    region_selection = request.form['regionselection']
    if(region_selection == "Custom"):
        custom_region_file = request.files['customregion']
    else:
        custom_region_file = ""
    end_use_ratios = request.files['EndUseRatiosFilename']
    end_use_half_lives = request.files['EndUseHalfLivesFilename']
    dispositions = request.files['DispositionsFilename']
    disposition_half_lives = request.files['DispositionHalfLivesFilename']
    distribution_data = request.files['DistributionDataFilename']
    burned_ratios = request.files['BurnedRatiosFilename']
    mbf_to_ccf = request.files['MbfToCcfFilename']
    ccf_to_mgc = request.files['CcfToMgcFilename']
    loss_factor = request.form['lossfactor']
    iterations = request.form['iterations']
    email = request.form['email']
    run_name = request.form['runname']

    # The data is compiled to a dictionary to be processed with the GcsHelper class
    data = {
            "harvest_data.csv":yearly_harvest_input,
            "harvest_data_type":harvest_data_type,
            "timber_product_data.csv":yearly_timber_product_ratios,
            "region":region_selection,
            "primary_product_data.csv":custom_region_file,
            "end_use_ratios.csv":end_use_ratios,
            "end_use_half_lives.csv":end_use_half_lives,
            "dispositions.csv":dispositions,
            "disposition_half_lives.csv":disposition_half_lives,
            "distribution_data.csv":distribution_data,
            "burned_ratios.csv":burned_ratios,
            "mbf_to_ccf.csv":mbf_to_ccf,
            "ccf_to_mgc.csv":ccf_to_mgc,
            "loss_factor":loss_factor,
            "iterations":iterations,
            "email":email,
            "run_name":run_name
            }
    print(data)

    # The file type is recorded to check between different data types in the GcsHelper.upload_input_group() method.
    data_type = type(yearly_harvest_input)
    new_id = str(uuid.uuid4())
    # print(new_id)
    gch.upload_input_group("hwpcarbon-data", user_data_folder + new_id + '/', data , data_type)
    return "This is a test to view the submitted data"
    #return render_template('results.html', file_path=user_data_folder + new_id + '/', run_name=run_name, run_path = 'https://hwpc-calculator-3d43jw4gpa-uw.a.run.app' + '/?p=' + user_data_folder + new_id + '&q=' + run_name)

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