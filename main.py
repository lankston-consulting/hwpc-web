import datetime
import json
import uuid
from flask import Flask, redirect, render_template, request
from flask_cors import CORS
from config import gch
# from results import Results as r

# class File:
#     current_time = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
#     file_group = "hpwc-user-inputs/user_request_" + current_time + "/"
#     #results_group = r(file_group=file_group)


user_data_folder = 'hpwc-user-inputs/'

app = Flask(__name__, template_folder="templates")
CORS(app)

#Routing for html template files
@app.route('/')
@app.route('/index')
@app.route('/home', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/homecontent', methods=['GET'])
def homecontent():
    return render_template('homecontent.html')

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

@app.route('/upload', methods=['POST'])
def upload():

    # All inputs from the UI are pulled here through with jquery Ajax
    yearly_harvest_input = request.files['yearlyharvestinput']
    harvest_data_type = request.form['harvestdatatype']
    yearly_timber_product_ratios = request.files['yearlytimberproductratios']
    region_selection = request.form['regionselection']
    if(region_selection == ""):
        region_selection = request.form['customregion']
    custom_region_file = request.files['customfileinput']
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

    # The data is compiled to a dictionary to be processed with the GcsHelper class
    data = {
            "harvest_data":yearly_harvest_input,
            "harvest_data_type":harvest_data_type,
            "timber_product_data":yearly_timber_product_ratios,
            "region":region_selection,
            "primary_product_data":custom_region_file,
            "end_use_ratios":end_use_ratios,
            "end_use_half_lives":end_use_half_lives,
            "dispositions":dispositions,
            "disposition_half_lives":disposition_half_lives,
            "distribution_data":distribution_data,
            "burned_ratios":burned_ratios,
            "mbf_to_ccf":mbf_to_ccf,
            "ccf_to_mgc":ccf_to_mgc,
            "loss_factor":loss_factor,
            "iterations":iterations,
            "email":email
            }

    # The file type is recorded to check between different data types in the GcsHelper.upload_input_group() method.
    data_type = type(yearly_harvest_input)
    
    # temporarily commented out to prevent junk data from being uploaded 
    new_id = str(uuid.uuid4())

    gch.upload_input_group("hwpcarbon-data", user_data_folder + new_id + '/', data , data_type)

    # redirect('https://hwpc-calculator-3d43jw4gpa-uw.a.run.app' + '/?p=' + user_data_folder + new_id)
    
    return download(file_path=user_data_folder + new_id + '/', run_path='https://hwpc-calculator-3d43jw4gpa-uw.a.run.app' + '/?p=' + user_data_folder + new_id)

@app.route('/download/<filepath>', methods=['GET'])
def download(file_path, run_path):
    #TEST DEFAULT PATH = hpwc-user-inputs/user_request_20210927_193455
    #filepath = "hpwc-user-inputs/user_request_20210927_193455"
    # with (gch.download_temp('hwpcarbon-data', filepath +"/results/results.json")) as results:
    #             filled = results.read()
    #             filled = json.loads(filled)
    # for filled_key,filled_value in filled.items():
    #     print("i run")
    #     gch.download_temp('hwpcarbon-data', filled_value)

    full_path = "https://storage.googleapis.com/hwpcarbon-data/" + file_path + "results/results.zip"
    return render_template('results.html', full_path=full_path, run_path=run_path)

# @app.route('/results',methods=['GET'])
# def show_results():
#     f_col = File.results_group.file_collection()
#     print(f_col)

#     #render_template('downloads.html', data=json.dumps(f_col))

#     return "done"

if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.

    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='0.0.0.0', port=8080, debug=True)