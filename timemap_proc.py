import csv
import json
import time

# csvFile = open("data/20170223.csv", "r", encoding='UTF-8')
# reader = csv.reader(csvFile)


data = []

def operatevalue(lng, lat, recitime):
    timestamp = time.localtime(recitime)
    lng = float(int(lng * 100) / 100)
    lat = float(int(lat * 100) / 100)
    for value in data:
        if value[0] == lng and value[1] == lat:
            value[2] += 1
            return
    data.append([lng, lat, timestamp.tm_hour*10000])


# print(time.localtime(1487779347).tm_mday)
index=0
with open('classify.json', 'r', encoding='UTF-8') as f:
    json_file = json.load(f)
    for item in json_file:
        index+=1
        # print(int(item['recitime']))
        lng = item['lng']
        lat = item['lat']
        lng = float(lng)
        lat = float(lat)
        operatevalue(lng, lat, int(item['recitime']))

        if index%100000==0: print("mark")
print(data)
# print(len(data))

max=0
min=10000
for item in data:
    if item[2]>max:
        max=item[2]
    if item[2]<min:
        min=item[2]

print(min)
print(max)



