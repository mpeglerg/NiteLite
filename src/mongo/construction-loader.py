# Command to run: python3 construction-loader.py

from pymongo import MongoClient
from decouple import config
import csv
import re
import sys
import json
import pymongo
import os

CRIME_SOURCE = 'Active_Building___Safety_Permits.csv'

mongo_client = pymongo.MongoClient(config('REACT_APP_MONGO_URI'))
mongo_db = mongo_client["NiteLite"]
mongo_collection = mongo_db["construction"]

seen_ids = set()

with open(CRIME_SOURCE, 'r+') as f:
    reader = csv.reader(f)
    for index, row in enumerate(reader):
        if index != 0:
            permit_id = row[0]
            permit_type = row[5]
            address = row[19].split("\n")
            if(len(address) > 2 and permit_id not in seen_ids):
                seen_ids.add(permit_id)

                address = address[-1]
                lat = address[address.index("(") + 1: address.index(",")]
                lon = address[address.index(",") + 2: -1]

                construction_zone = {
                    'id': permit_id,
                    'type': permit_type,
                    'location': {
                        "type": "Point",
                        "coordinates": [float(lon), float(lat)]
                    }}
                print((construction_zone))

            # TODO: make sure replace is a fine workaround
            # mongo_collection.insert_one(construction_zone)
            mongo_collection.replace_one(construction_zone, construction_zone, True)
