#!/usr/bin/env python
import os
from dotenv import load_dotenv
from utils import gcs_helper
"""Credentials for RPMS App."""

load_dotenv()

###############################################################################
#                               Initialization.                               #
###############################################################################
json_keyfile = os.getenv('SERVICE_ACCOUNT_FILE')
if os.path.exists(json_keyfile):
    gch = gcs_helper.GcsHelper(use_service_account={'keyfile': json_keyfile})
else:
    gch = gcs_helper.GcsHelper()
