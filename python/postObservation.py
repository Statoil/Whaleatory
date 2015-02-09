import json
import urllib2

data = {
    "observations": {
        "pos":{
            "latitude":"63.4504946",
            "longitude":"10.491356"},
        "comment":"From Outer Space",
        "species":"MoonLight",
        "time":"time"}
    }

data = json.dumps(data)
print data

url = "https://glacial-headland-5747.herokuapp.com/observation"
req = urllib2.Request(url, data, {'Content-Type': 'application/json'})

 
f = urllib2.urlopen(req)
response = f.read()
f.close()
