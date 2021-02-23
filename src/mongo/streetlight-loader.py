# Command to run: python3 streetlight-loader.py

from pymongo import MongoClient
import csv
import re
import sys
import json
import pymongo

STREETLIGHT_SOURCE = 'STLIGHT.csv'

mongo_client = pymongo.MongoClient("mongodb+srv://snagendran:EOcJhkCgpeJP3Z0h@cluster0.eo6ns.mongodb.net/NiteLite?retryWrites=true&w=majority")
mongo_db = mongo_client["NiteLite"]
mongo_collection = mongo_db["streetlights"]

with open(STREETLIGHT_SOURCE, 'r+') as f:
    reader = csv.reader(f)
    for index, row in enumerate(reader):
        if index != 0:
            id, point = row[1], row[3]

            try:
                lon, lat = re.findall(r'-?\d+(?:\.\d+)?', point)
            except ValueError:
                pass

            streetlight = {'id': id, 'location': {
                  "type": "Point", "coordinates": [float(lon), float(lat)]}}
            print(json.dumps(streetlight))
                
            mongo_collection.insert_one(streetlight)
