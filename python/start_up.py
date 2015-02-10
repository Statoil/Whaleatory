'''
Created on 10. feb. 2015
@author: PPAR
Mock for simulating capturing observation - client side
'''

from math import sqrt, acos, pi, radians, tan
import random, time

import json
import urllib2

def post_observation(id, lat, lon, comment, time):
    type = [["Whale", "Fin Whale", "img/icon/whale_trans_small.png", "img/images/FinWhale.jpg"], ["Seal", "Northern Elephant Seal", "img/icon/seal_trans_small.png", "img/images/NorthernElephantSeal.jpg"], ["Whale", "Pygmy Sperm Whale", "img/icon/whale_trans_small.png", "img/images/SpermWhale.jpg"]]
    i = random.randint(0, 2)
    print i,
    print type[i]
	
    data = {"observations": {"pos":{"latitude":str(lat),"longitude":str(lon)},"comment":comment,"species":{"id" : id, "type" : type[i][0], "name" : type[i][1], "icon" : type[i][2], "image":type[i][3]},"time": str(time)}}	

    data = json.dumps(data)
    print data

    url = "https://calm-reef-3273.herokuapp.com/observation"
    req = urllib2.Request(url, data, {'Content-Type': 'application/json'})
    f = urllib2.urlopen(req)
    response = f.read()
    print response
    f.close()


##min max format Region ubder focus
region_lat =[63.45927187, 63.478288178]
region_lon = [10.3384399, 10.4936218]

id_counter = 1

continueLoop = True
while continueLoop:
    print "\n---------------------------------------------------------------"
    data_type = raw_input("(m) - measurement, (q) quit> ")
    
	
    if data_type == "q":
        break
    
    if data_type == "m":
        readable_data_type = "measurement"
        random_observation = random.random()
        observation_lat = region_lat[0] + (region_lat[1] - region_lat[0]) * random_observation
        observation_lon = region_lon[0] + (region_lon[1] - region_lon[0]) * random_observation
        print "lat: %r, long: %r" % (observation_lat, observation_lon)
        post_observation(id_counter, observation_lat, observation_lon, "From Outer Space_" + str(random_observation), time.strftime("%c"))
        id_counter +=1
    print "---------------------------------------------------------------"

exit(0)