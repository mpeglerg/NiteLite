# Command to run: python3 crime-loader.py

from pymongo import MongoClient
from decouple import config
import csv
import re
import sys
import json
import pymongo
from datetime import datetime

CRIME_SOURCE = 'Crime_Data_from_2010_to_2019.csv'


def to_iso8601_date(value):
    output = datetime.strptime(value, "%m/%d/%Y %H:%M:%S %p")
    return output.strftime("%Y-%m-%d")


mongo_client = pymongo.MongoClient(config('REACT_APP_MONGO_URI'))
mongo_db = mongo_client["NiteLite"]
mongo_collection = mongo_db["crimes"]

with open(CRIME_SOURCE, 'r+') as f:
    reader = csv.reader(f)
    for index, row in enumerate(reader):
        if index != 0 and len(row) == 28:
            date_occurred = to_iso8601_date(row[2])
            print(row)
            if int(date_occurred[:4]) > 2018:
                try:
                    id = row[0]
                    date_reported = to_iso8601_date(row[1])
                    time_occurred = row[3]
                    crime_code = row[8]
                    crime_code_description = row[9]
                    lat = row[-2]
                    lon = row[-1]
                    
                    crime = {'id': id,
                                    "dateReported": date_reported,
                                    "dateOccurred": date_occurred,
                                    "timeOccurred": time_occurred,
                                    "crimeCode": int(crime_code),
                                    'location': {"type": "Point", "coordinates": [float(lon), float(lat)]}
                            }
                    print(len(row))
                    print(json.dumps(crime))
                
                    mongo_collection.insert_one(crime)
                except (pymongo.errors.DuplicateKeyError, ValueError, IndexError) as e:
                    pass
