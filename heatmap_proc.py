import csv
import json

# csvFile = open("data/20170223.csv", "r", encoding='UTF-8')
# reader = csv.reader(csvFile)

data = []
annex = []

# def operatevalue(lng, lat):
#     key = lng*10+lat
#     if key in annex:
#         data[annex.index(key)][2]+=1
#
#     else:
#         data.append([lng, lat, 1])
#         annex.append(key)

def operatevalue(lng, lat):
    lng=float(int(lng*10)/10)
    lat=float(int(lat*10)/10)
    for value in data:
        if value[0]==lng and value[1]==lat:
            value[2]+=1
            return
    data.append([lng, lat, 1])

# for item in reader:
#     if reader.line_num == 1:
#         continue
#     lng = item[5]
#     lat = item[6]
#     # lng = int(float(lng)/10) * 10
#     # lat = int(float(lat)/10) * 10
#     lng = float(lng)
#     lat = float(lat)
#
#     operatevalue(lng, lat)
index=0
with open('classify.json', 'r', encoding='UTF-8') as f:
    json_file = json.load(f)
    for item in json_file:
        index+=1
        lng = item['lng']
        lat = item['lat']
        lng = float(lng)
        lat = float(lat)
        # print(lng,lat)
        # print(index)
        operatevalue(lng, lat)

        if index%100000==0: print("mark")
print(data)
print(len(data))

max=0
for item in data:
    if item[2]>max:
        max=item[2]

print(max)


