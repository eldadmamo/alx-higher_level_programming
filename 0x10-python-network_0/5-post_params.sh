#!/bin/bash
# Bash scripts that sends a POST req
curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
