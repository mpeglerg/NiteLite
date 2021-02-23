# Command to run: python3 crime-code-loader.py

from pymongo import MongoClient
import csv
import re
import sys
import json
import pymongo

CRIME_SOURCE = 'Crime_Data_from_2010_to_2019.csv'


mongo_client = pymongo.MongoClient("mongodb+srv://snagendran:EOcJhkCgpeJP3Z0h@cluster0.eo6ns.mongodb.net/NiteLite?retryWrites=true&w=majority")
mongo_db = mongo_client["NiteLite"]
mongo_collection = mongo_db["crimecodes"]

seen_codes = set()

with open(CRIME_SOURCE, 'r+') as f:
    reader = csv.reader(f)
    for index, row in enumerate(reader):
        if index != 0:
            try:
                code = row[8]
                crime_code_description = row[9]

            except IndexError:
                pass
            
            if code not in seen_codes:
                crime_code = {
                                'code': int(code),
                                "description": crime_code_description
                            }
                print(json.dumps(crime_code))
                seen_codes.add(code)
                
                mongo_collection.insert_one(crime_code)
