from flask import Flask, redirect, render_template, request
import tempfile
import datetime
from utils.gcs_helper import GcsHelper

app = Flask(__name__, template_folder="templates")

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

@app.route('/upload', methods=['GET', 'POST'])
def upload():

    data = request.args.get('data')
    print(data)
    current_time = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    user_file_upload = GcsHelper().upload_temp("hwpcarbon-data", data, "hpwc-user-inputs/user_request_" + current_time + ".json")
    user_file_upload.make_public()

    return 

if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.

    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)