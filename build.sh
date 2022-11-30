#!/bin/sh
echo Building hwpc-web
pipenv requirements > requirements.txt
docker build -t hwpc-web:latest . 
docker tag hwpc-web:latest 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-web:latest
# docker push 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-calc:latest