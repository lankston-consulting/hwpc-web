#!/bin/sh
echo Building hwpc-web
pipenv requirements > requirements.txt
docker build -t hwpc-web:test . 
docker tag hwpc-web:test 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-web:test
# docker push 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-calc:test