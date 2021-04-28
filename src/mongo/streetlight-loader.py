# Command to run: python3 streetlight-loader.py

from pymongo import MongoClient
from decouple import config
import csv
import re
import sys
import json
import pymongo

STREETLIGHT_SOURCE = 'STLIGHT.csv'

mongo_client = pymongo.MongoClient(config('REACT_APP_MONGO_URI'))
mongo_db = mongo_client["NiteLite"]
mongo_collection = mongo_db["streetlights"]

with open(STREETLIGHT_SOURCE, 'r+') as f:
    reader = csv.reader(f)
    for index, row in enumerate(reader):
        if index != 0:
            id, point = row[2], row[1]
            # print(point)

            try:
                lon, lat = re.findall(r'-?\d+(?:\.\d+)?', point)
                # print("here?")
            except ValueError:
                pass

            streetlight = {'id': id, 'location': {
                  "type": "Point", "coordinates": [float(lon), float(lat)]}}
            print(json.dumps(streetlight))
                
            mongo_collection.insert_one(streetlight)
