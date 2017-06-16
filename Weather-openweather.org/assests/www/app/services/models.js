define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "String": {
            "type": "string"
        },
        "Weather": {
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "location": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "temperature": {
                    "type": "string"
                }
            }
        },
        "Number": {
            "type": "number"
        },
        "Boolean": {
            "type": "boolean"
        },
        "weatherAPI_conditions_weather_get": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/conditions/weather"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "location": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{weatherAPI_settings.API_EXPRESS_API_KEY}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "HTTP_RESPONSE_HEADERS": {
                                            "type": "object",
                                            "properties": {
                                                "Server": {
                                                    "type": "string",
                                                    "default": "openresty"
                                                },
                                                "Access-Control-Allow-Methods": {
                                                    "type": "string",
                                                    "default": "GET, POST"
                                                },
                                                "Content-Type": {
                                                    "type": "string",
                                                    "default": "application/json; charset=utf-8"
                                                },
                                                "X-Cache-Key": {
                                                    "type": "string",
                                                    "default": "/data/2.5/weather?q=delhi"
                                                },
                                                "Access-Control-Allow-Origin": {
                                                    "type": "string",
                                                    "default": "*"
                                                },
                                                "Connection": {
                                                    "type": "string",
                                                    "default": "keep-alive"
                                                },
                                                "Content-Length": {
                                                    "type": "string",
                                                    "default": "435"
                                                },
                                                "Date": {
                                                    "type": "string",
                                                    "default": "Thu, 15 Jun 2017 16:54:00 GMT"
                                                },
                                                "Access-Control-Allow-Credentials": {
                                                    "type": "string",
                                                    "default": "true"
                                                }
                                            }
                                        },
                                        "BODY": {
                                            "type": "object",
                                            "properties": {
                                                "coord": {
                                                    "type": "object",
                                                    "properties": {
                                                        "lon": {
                                                            "type": "number",
                                                            "default": 77.22
                                                        },
                                                        "lat": {
                                                            "type": "number",
                                                            "default": 28.67
                                                        }
                                                    }
                                                },
                                                "main": {
                                                    "type": "object",
                                                    "properties": {
                                                        "humidity": {
                                                            "type": "number",
                                                            "default": 39
                                                        },
                                                        "temp_max": {
                                                            "type": "number",
                                                            "default": 308.15
                                                        },
                                                        "pressure": {
                                                            "type": "number",
                                                            "default": 1000
                                                        },
                                                        "temp_min": {
                                                            "type": "number",
                                                            "default": 308.15
                                                        },
                                                        "temp": {
                                                            "type": "number",
                                                            "default": 308.15
                                                        }
                                                    }
                                                },
                                                "visibility": {
                                                    "type": "number",
                                                    "default": 3000
                                                },
                                                "wind": {
                                                    "type": "object",
                                                    "properties": {
                                                        "deg": {
                                                            "type": "number",
                                                            "default": 100
                                                        },
                                                        "speed": {
                                                            "type": "number",
                                                            "default": 2.6
                                                        }
                                                    }
                                                },
                                                "id": {
                                                    "type": "number",
                                                    "default": 1273294
                                                },
                                                "base": {
                                                    "type": "string",
                                                    "default": "stations"
                                                },
                                                "clouds": {
                                                    "type": "object",
                                                    "properties": {
                                                        "all": {
                                                            "type": "number",
                                                            "default": 20
                                                        }
                                                    }
                                                },
                                                "weather": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "object",
                                                        "properties": {
                                                            "icon": {
                                                                "type": "string"
                                                            },
                                                            "name": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "number",
                                                                "default": null
                                                            },
                                                            "main": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    }]
                                                },
                                                "dt": {
                                                    "type": "number",
                                                    "default": 1497542400
                                                },
                                                "cod": {
                                                    "type": "number",
                                                    "default": 200
                                                },
                                                "name": {
                                                    "type": "string",
                                                    "default": "Delhi"
                                                },
                                                "sys": {
                                                    "type": "object",
                                                    "properties": {
                                                        "country": {
                                                            "type": "string",
                                                            "default": "IN"
                                                        },
                                                        "type": {
                                                            "type": "number",
                                                            "default": 1
                                                        },
                                                        "sunset": {
                                                            "type": "number",
                                                            "default": 1497534643
                                                        },
                                                        "id": {
                                                            "type": "number",
                                                            "default": 7809
                                                        },
                                                        "message": {
                                                            "type": "number",
                                                            "default": 0.004
                                                        },
                                                        "sunrise": {
                                                            "type": "number",
                                                            "default": 1497484372
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "HTTP_RESPONSE_CODE": {
                                            "type": "number",
                                            "default": 200
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return models;

});