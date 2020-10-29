const apiHost = () => {}; // No-op in our mock version.

const getWalkScore = () =>
  Promise.resolve([
    {
        "status": 1,
        "walkscore": 74,
        "description": "Very Walkable",
        "updated": "2020-07-14 20:56:23.137062",
        "logo_url": "https://cdn.walk.sc/images/api-logo.png",
        "more_info_icon": "https://cdn.walk.sc/images/api-more-info.gif",
        "more_info_link": "https://www.redfin.com/how-walk-score-works",
        "ws_link": "https://www.walkscore.com/score/Playa-Vista-Los-Angeles-CA-USA/lat=33.9754369/lng=-118.4192582/?utm_source=shanaya.n@gmail.com&utm_medium=ws_api&utm_campaign=ws_api",
        "help_link": "https://www.redfin.com/how-walk-score-works",
        "snapped_lat": 33.9750,
        "snapped_lon": -118.4190
    }
  ]);


const getDirections = () =>
  Promise.resolve([
    {
        "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJLbMF8IqwwoARns4Lm7HaVpc",
            "types": [
                "locality",
                "political"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJZ8sJQpqwwoAR2nfkAOI8LbQ",
            "types": [
                "neighborhood",
                "political"
            ]
        }
        ],
        "routes": [
            {
                "bounds": {
                    "northeast": {
                        "lat": 33.9853191,
                        "lng": -118.4192582
                    },
                    "southwest": {
                        "lat": 33.9720407,
                        "lng": -118.4587034
                    }
                },
                "copyrights": "Map data ©2020",
                "legs": [
                    {
                        "distance": {
                            "text": "3.5 mi",
                            "value": 5584
                        },
                        "duration": {
                            "text": "1 hour 9 mins",
                            "value": 4167
                        },
                        "end_address": "Playa Vista, Los Angeles, CA, USA",
                        "end_location": {
                            "lat": 33.9754369,
                            "lng": -118.4192582
                        },
                        "start_address": "Marina Del Rey, CA 90292, USA",
                        "start_location": {
                            "lat": 33.9795199,
                            "lng": -118.4517313
                        },
                        "steps": [
                            {
                                "distance": {
                                    "text": "0.1 mi",
                                    "value": 227
                                },
                                "duration": {
                                    "text": "3 mins",
                                    "value": 163
                                },
                                "end_location": {
                                    "lat": 33.9794557,
                                    "lng": -118.4541915
                                },
                                "html_instructions": "Head <b>west</b>",
                                "polyline": {
                                    "points": "_sknEhb~qU@~A@pC?`C@vBD?"
                                },
                                "start_location": {
                                    "lat": 33.9795199,
                                    "lng": -118.4517313
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "98 ft",
                                    "value": 30
                                },
                                "duration": {
                                    "text": "1 min",
                                    "value": 24
                                },
                                "end_location": {
                                    "lat": 33.9792203,
                                    "lng": -118.4541909
                                },
                                "html_instructions": "Turn <b>left</b> toward <b>Panay Way</b>",
                                "maneuver": "turn-left",
                                "polyline": {
                                    "points": "srknEtq~qUn@?"
                                },
                                "start_location": {
                                    "lat": 33.9794557,
                                    "lng": -118.4541915
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "220 ft",
                                    "value": 67
                                },
                                "duration": {
                                    "text": "1 min",
                                    "value": 50
                                },
                                "end_location": {
                                    "lat": 33.9791123,
                                    "lng": -118.4548558
                                },
                                "html_instructions": "Turn <b>right</b> toward <b>Panay Way</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "cqknEtq~qU?N?j@?R@L@B@F@BBDBB@@BB?F"
                                },
                                "start_location": {
                                    "lat": 33.9792203,
                                    "lng": -118.4541909
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "0.1 mi",
                                    "value": 173
                                },
                                "duration": {
                                    "text": "2 mins",
                                    "value": 130
                                },
                                "end_location": {
                                    "lat": 33.9791117,
                                    "lng": -118.4566844
                                },
                                "html_instructions": "Turn <b>right</b> onto <b>Panay Way</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "mpknEzu~qU?xA?P?pD?P?z@"
                                },
                                "start_location": {
                                    "lat": 33.9791123,
                                    "lng": -118.4548558
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "0.1 mi",
                                    "value": 154
                                },
                                "duration": {
                                    "text": "2 mins",
                                    "value": 111
                                },
                                "end_location": {
                                    "lat": 33.9794485,
                                    "lng": -118.4580056
                                },
                                "html_instructions": "Turn <b>right</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "mpknEfa_rUi@AE?C?C@C@C@ABADAB@F?N?~@?~C"
                                },
                                "start_location": {
                                    "lat": 33.9791117,
                                    "lng": -118.4566844
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "0.3 mi",
                                    "value": 441
                                },
                                "duration": {
                                    "text": "5 mins",
                                    "value": 324
                                },
                                "end_location": {
                                    "lat": 33.9827304,
                                    "lng": -118.4570786
                                },
                                "html_instructions": "Turn <b>right</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "qrknEpi_rUI?GBw@h@iAr@IFGBGBODUFOBKBE?K@S@G?GAUASCKAMCGCGCOGIEWOKGMKWSMMOOIIGIEKMUEKGOEUCKAECEEEOKMKEQKMIIKICD"
                                },
                                "start_location": {
                                    "lat": 33.9794485,
                                    "lng": -118.4580056
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "39 ft",
                                    "value": 12
                                },
                                "duration": {
                                    "text": "1 min",
                                    "value": 11
                                },
                                "end_location": {
                                    "lat": 33.9827995,
                                    "lng": -118.4571812
                                },
                                "html_instructions": "Turn <b>left</b> onto <b>Palawan Way</b>",
                                "maneuver": "turn-left",
                                "polyline": {
                                    "points": "aglnEvc_rUMR"
                                },
                                "start_location": {
                                    "lat": 33.9827304,
                                    "lng": -118.4570786
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "325 ft",
                                    "value": 99
                                },
                                "duration": {
                                    "text": "1 min",
                                    "value": 78
                                },
                                "end_location": {
                                    "lat": 33.9835184,
                                    "lng": -118.4571683
                                },
                                "html_instructions": "Turn <b>right</b> toward <b>Admiralty Way</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "oglnEjd_rUOMk@c@SIEAA?A@A?A?EBQVEFGHKJ"
                                },
                                "start_location": {
                                    "lat": 33.9827995,
                                    "lng": -118.4571812
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "1.0 mi",
                                    "value": 1572
                                },
                                "duration": {
                                    "text": "19 mins",
                                    "value": 1160
                                },
                                "end_location": {
                                    "lat": 33.9820312,
                                    "lng": -118.4416741
                                },
                                "html_instructions": "Turn <b>right</b> onto <b>Admiralty Way</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "_llnEhd_rUu@sAa@u@_@s@IKYi@g@y@{@_BGMUi@KWIWSw@Ia@E_@Im@Eu@?I?UAi@@]@Y@[@SBOD_@L}@DSHi@F]DQPiANw@Lu@DOFa@ZmBp@_E@MDYBQFc@F]@QZqCFg@Fk@V}BHq@@O\\{CLgABQBYJ_AHu@VwB@IBS@QBQBUF_@DM@IN_@FOVg@LSFKZWb@Y`@WVKJGLI"
                                },
                                "start_location": {
                                    "lat": 33.9835184,
                                    "lng": -118.4571683
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "187 ft",
                                    "value": 57
                                },
                                "duration": {
                                    "text": "1 min",
                                    "value": 43
                                },
                                "end_location": {
                                    "lat": 33.9822758,
                                    "lng": -118.4412036
                                },
                                "html_instructions": "Turn <b>left</b> onto <b>Bali Way</b>",
                                "maneuver": "turn-left",
                                "polyline": {
                                    "points": "ublnElc|qUCCGMe@kA"
                                },
                                "start_location": {
                                    "lat": 33.9820312,
                                    "lng": -118.4416741
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "0.8 mi",
                                    "value": 1285
                                },
                                "duration": {
                                    "text": "16 mins",
                                    "value": 946
                                },
                                "end_location": {
                                    "lat": 33.9741142,
                                    "lng": -118.4316422
                                },
                                "html_instructions": "Turn <b>right</b> onto <b>CA-1 S</b>/<wbr/><b>Lincoln Blvd</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "gdlnEn`|qUBQ@G?EBIDKTSfA_A`@_@Z[LOhAgA~AkBJKDGJIh@o@~@gAl@y@xAsBZc@DIBEDEtAuBJOFKFILUjAoBvBuD~BcE@GDO@CDIHKHKLOHIFIFINQRUPQDEv@u@n@e@FEPKJGFEPIb@W@?ZS@ANINILIj@]v@c@GS"
                                },
                                "start_location": {
                                    "lat": 33.9822758,
                                    "lng": -118.4412036
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "469 ft",
                                    "value": 143
                                },
                                "duration": {
                                    "text": "2 mins",
                                    "value": 123
                                },
                                "end_location": {
                                    "lat": 33.9730774,
                                    "lng": -118.4307218
                                },
                                "html_instructions": "Slight <b>left</b> toward <b>Lincoln Blvd</b>",
                                "maneuver": "turn-slight-left",
                                "polyline": {
                                    "points": "eqjnEvdzqUHSBC@ABCVQp@g@XUb@]VSXW"
                                },
                                "start_location": {
                                    "lat": 33.9741142,
                                    "lng": -118.4316422
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "407 ft",
                                    "value": 124
                                },
                                "duration": {
                                    "text": "2 mins",
                                    "value": 99
                                },
                                "end_location": {
                                    "lat": 33.9720407,
                                    "lng": -118.4300871
                                },
                                "html_instructions": "Continue onto <b>Lincoln Blvd</b>",
                                "polyline": {
                                    "points": "wjjnE~~yqUZS|Aw@j@[PGFENG"
                                },
                                "start_location": {
                                    "lat": 33.9730774,
                                    "lng": -118.4307218
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "0.4 mi",
                                    "value": 616
                                },
                                "duration": {
                                    "text": "8 mins",
                                    "value": 460
                                },
                                "end_location": {
                                    "lat": 33.9746131,
                                    "lng": -118.4242777
                                },
                                "html_instructions": "Turn <b>left</b> onto <b>W Jefferson Blvd</b>",
                                "maneuver": "turn-left",
                                "polyline": {
                                    "points": "gdjnE`{yqUsAyDw@yBa@iAe@uAGOEOGIEOGQa@iAK[ACK_@IUOe@eBkFmAwD"
                                },
                                "start_location": {
                                    "lat": 33.9720407,
                                    "lng": -118.4300871
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "443 ft",
                                    "value": 135
                                },
                                "duration": {
                                    "text": "2 mins",
                                    "value": 104
                                },
                                "end_location": {
                                    "lat": 33.9735586,
                                    "lng": -118.423571
                                },
                                "html_instructions": "Turn <b>right</b> onto <b>Concert Park Dr</b>",
                                "maneuver": "turn-right",
                                "polyline": {
                                    "points": "itjnEvvxqULI|@e@bAi@v@c@LGCG"
                                },
                                "start_location": {
                                    "lat": 33.9746131,
                                    "lng": -118.4242777
                                },
                                "travel_mode": "WALKING"
                            },
                            {
                                "distance": {
                                    "text": "0.3 mi",
                                    "value": 449
                                },
                                "duration": {
                                    "text": "6 mins",
                                    "value": 341
                                },
                                "end_location": {
                                    "lat": 33.9754369,
                                    "lng": -118.4192582
                                },
                                "html_instructions": "Turn <b>left</b> onto <b>W Runway Rd</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                "maneuver": "turn-left",
                                "polyline": {
                                    "points": "wmjnEhrxqUm@gBEOAGk@cBi@cBGMi@cBo@kBEMq@qBg@}AGMa@kA"
                                },
                                "start_location": {
                                    "lat": 33.9735586,
                                    "lng": -118.423571
                                },
                                "travel_mode": "WALKING"
                            }
                        ],
                        "traffic_speed_entry": [],
                        "via_waypoint": []
                    }
                ],
                "overview_polyline": {
                    "points": "_sknEhb~qUDjNt@??z@@`@BJJNBJ?jB?bE?z@i@AI?GBIN@vFQBaC|Ai@Tw@No@@i@EYEi@UiAw@g@g@a@w@Sw@IK]WEQKMUSQX{@q@YKC@C?WZMPKJu@sAaAiBc@u@cByC]w@Uo@]yAOmAE_A@wBL_Bd@yC~AiJ|@yFl@eFbBiO|@iIRmAVo@d@{@b@c@dAq@b@SLICCm@yADYBODKTShB_Bh@k@hAgA~AkBPSt@y@lBaC~BgDnBwCxEeI`CkEFSf@q@h@o@bBcBv@k@\\S~@g@|@i@x@g@v@c@GSLWDEfCmBp@k@xBkAtAq@oFmOcEcMmAwDLI`CoAdAk@q@oB}A_FgBkFcCiH"
                },
                "summary": "Admiralty Way",
                "warnings": [
                    "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
                ],
                "waypoint_order": []
            }
        ],
        "status": "OK"
    }
  ]);

  export {
  apiHost,
  getWalkScore,
  getDirections
};