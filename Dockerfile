FROM gcr.io/google-appengine/python:latest

RUN apt-get update
RUN wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.xenial_amd64.deb
RUN apt-get install --no-install-recommends -y ./wkhtmltox_0.12.6-1.xenial_amd64.deb

# Use environment credentials for pulling from Github
ARG GITHUB_USER ${GITHUB_USER}
ARG GITHUB_PAT ${GITHUB_PAT}
ARG GITHUB_REPO ${GITHUB_REPO}
ARG GITHUB_REF ${GITHUB_REF}

ENV PYTHONUNBUFFERED True

RUN python -m pip install --upgrade pip

# Create a virtualenv for dependencies. This isolates these packages from
# system-level packages.
# Use -p python3 or -p python3.7 to select python version. Default is version 2.
RUN virtualenv -p python3 /env

# Setting these environment variables are the same as running
# source /env/bin/activate.
# ENV VIRTUAL_ENV /env
# ENV PATH /env/bin:$PATH

# Set app directory
ENV APP_HOME /app
WORKDIR $APP_HOME

# Install production dependencies.
RUN pip install pipenv
COPY Pipfile .
COPY Pipfile.lock .

RUN pipenv lock --keep-outdated --requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./
ENV PORT ${PORT}
#RUN /env/bin/python -m pip install --upgrade pip

# Copy the application's requirements.txt and run pip to install all
# dependencies into the virtualenv.
# ADD requirements.txt /app/requirements.txt
# RUN pip install -r /app/requirements.txt

# Add the application source code.
# ADD . /app

# Run a WSGI server to serve the application. gunicorn must be declared as
# a dependency in requirements.txt.
CMD gunicorn -b :$PORT main:app --timeout 90 --log-level debug
# CMD python main.py