#!/usr/bin/env python
from utils import gcs_helper
"""Credentials for RPMS App."""


# The private key associated with your service account in JSON format.
GCP_PRIVATE_KEY_FILE = 'hwpc-sa.json'

###############################################################################
#                               Initialization.                               #
###############################################################################
# gch = gcs_helper.GcsHelper(use_service_account={'keyfile': GCP_PRIVATE_KEY_FILE})
gch = gcs_helper.GcsHelper()