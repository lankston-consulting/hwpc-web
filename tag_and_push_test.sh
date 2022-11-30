#!/bin/sh
echo Tag and Push hwpc-web
docker tag hwpc-web:latest 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-web:latest
docker push 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-web:latest