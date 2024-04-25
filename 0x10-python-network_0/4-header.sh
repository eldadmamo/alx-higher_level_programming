#!/bin/bash
# Send a GET request to header variable.
curl -sL -H 'X-School-User-Id: 98' -- "$1"
