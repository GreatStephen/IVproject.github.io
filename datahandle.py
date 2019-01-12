import os
import csv
import json

path = "./data"
files = os.listdir(path)

class1 = ['发票', '代开', '普增', '税点', '专增', '代办', '抵扣', '增值', '刻章']  # 办证发票
class2 = ['积分', '现金', '提额', '额度', '银行', '解冻']  # 假冒身份
class3 = ['模特', '上门服务', '洋妞', '少妇', '空姐', '美女', '学生妹']  # 色情服务
class4 = ['独门独院', '农家院', '房源', '现房出售', '平米']  # 地产广告


def classify(text):
    for item in class1:
        if item in text:
            return "办证发票"
    for item in class2:
        if item in text:
            return "假冒身份"
    for item in class3:
        if item in text:
            return "色情服务"
    for item in class4:
        if item in text:
            return "地产广告"
    return "其他"

bigdict=[]
with open("classify.json", 'w', encoding='UTF-8') as fout:
    for filename in files:
        with open(path + "/" + filename, 'r', encoding='UTF-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                dict_row = dict(row)
                dict_row.update({'classify':classify(str(dict_row['content']))})
                del dict_row['md5']
                del dict_row['content']
                del dict_row['phone']
                dict_row['conntime'] = dict_row['conntime'][0:10]#去掉时间戳后3位0
                dict_row['recitime'] = dict_row['recitime'][0:10]
                # json.dump(dict_row, fout, ensure_ascii=False, indent=4)
                bigdict.append(dict_row)
        print(filename)
    json.dump(bigdict, fout, ensure_ascii=False, indent=4)