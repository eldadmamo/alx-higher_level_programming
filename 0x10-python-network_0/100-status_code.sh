#!/bin/bash
# Sends a GET request to display the response status code.
curl -s -o /dev/null -w "%{http_code}" "$1"
