#!/bin/sh
echo Tag and Push hwpc-web
docker tag hwpc-web:test 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-web:test
docker push 234659567514.dkr.ecr.us-west-2.amazonaws.com/hwpc-web:test