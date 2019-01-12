chart = echarts.init(document.getElementById('wordCloud'));

option = {
    tooltip: {},
    backgroundColor:"#f9f7e8",
    series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 150],
        rotationRange: [-90, 90],
        shape: 'pentagon',
        width: 1024,
        height: 720,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: '发票',
                value: 1609821
            },
            {
                name: '付款',
                value: 1355795
            },
            {
                name: '代开',
                value: 1226387
            },
            {
                name: '行业',
                value: 1216332
            },
            {
                name: '保真',
                value: 757292
            },
            {
                name: '正规',
                value: 675006
            },
            {
                name: '验后',
                value: 668847
            },
            {
                name: '账户',
                value: 495869
            },
            {
                name: '北京',
                value: 490132
            },
            {
                name: '兑换积分',
                value: 463918
            },
            {
                name: '现金',
                value: 461103
            },
            {
                name: '增值税',
                value: 397658
            },
            {
                name: '网址',
                value: 395254
            },
            {
                name: '酒店',
                value: 350714
            },
            {
                name: '低保真',
                value: 333520
            },
            {
                name: '公寓',
                value: 325099
            },
            {
                name: '模特',
                value: 323109
            },
            {
                name: '白领',
                value: 312281
            },
            {
                name: '微信',
                value: 302338
            },
            {
                name: '机打',
                value: 278413
            },
            {
                name: '上门服务',
                value: 277795
            },
            {
                name: '对外',
                value: 251536
            },
            {
                name: '无需定金',
                value: 227020
            },
            {
                name: '联系电话',
                value: 223005
            },
            {
                name: '洋妞',
                value: 210296
            },
            {
                name: '建设银行',
                value: 198528
            },
            {
                name: '少妇',
                value: 193657
            },
            {
                name: '空姐',
                value: 193456
            },
            {
                name: '建行',
                value: 193021
            },
            {
                name: '支票',
                value: 186717
            },
            {
                name: '美女',
                value: 183048
            },
            {
                name: '兑现',
                value: 174572
            },
            {
                name: '广告',
                value: 173484
            },
            {
                name: '工商银行',
                value: 173123
            },
            {
                name: '普通',
                value: 168163
            },
            {
                name: '中国银行',
                value: 166855
            },
            {
                name: '中行',
                value: 163269
            },
            {
                name: '经理',
                value: 161441
            },
            {
                name: '诚信',
                value: 155857
            },
            {
                name: '走账',
                value: 151509
            },
            {
                name: '信用卡',
                value: 145416
            },
            {
                name: '明星',
                value: 145251
            },
            {
                name: '恭喜发财',
                value: 145129
            },
            {
                name: '王经理',
                value: 137922
            },
            {
                name: '工行',
                value: 134581
            },
            {
                name: '学妹',
                value: 131498
            },
            {
                name: '普增',
                value: 119400
            },
            {
                name: '清纯',
                value: 117510
            },
            {
                name: '提额',
                value: 111461
            },
            {
                name: '税点',
                value: 109701
            },
            {
                name: '额度',
                value: 108582
            },
            {
                name: '北京市',
                value: 105453
            },
            {
                name: '欧美',
                value: 100593
            },
            {
                name: '对公',
                value: 95787
            },
            {
                name: '农业银行',
                value: 95452
            },
            {
                name: '冻结',
                value: 94203
            },
            {
                name: '会计',
                value: 91897
            },
            {
                name: '学生',
                value: 89710
            },
            {
                name: '李经理',
                value: 89510
            },
            {
                name: '专增',
                value: 88773
            },
            {
                name: '各行各业',
                value: 87220
            },
            {
                name: '抵扣',
                value: 86796
            },
            {
                name: '代办',
                value: 83060
            },
            {
                name: '专用',
                value: 78900
            },
            {
                name: '国税发',
                value: 74788
            },
            {
                name: '增值',
                value: 74773
            },
            {
                name: '开发票',
                value: 74752
            },
            {
                name: '解冻',
                value: 71539
            },
            {
                name: '租赁',
                value: 71174
            },
            {
                name: '票据',
                value: 71048
            },
            {
                name: '急用',
                value: 62715
            },
            {
                name: '国税',
                value: 62433
            },
            {
                name: '普通发票',
                value: 61002
            },
            {
                name: '姿色',
                value: 60456
            },
            {
                name: '独门独院',
                value: 59269
            },
            {
                name: '学生妹',
                value: 58973
            },
            {
                name: '短信',
                value: 57876
            },
            {
                name: '个人信息',
                value: 57694
            },
            {
                name: '农家院',
                value: 55092
            },
            {
                name: '留学生',
                value: 54464
            },
            {
                name: '办公用品',
                value: 51632
            },
            {
                name: '通州',
                value: 49780
            },
            {
                name: '机械',
                value: 49354
            },
            {
                name: '房源',
                value: 49193
            },
            {
                name: '护士',
                value: 48719
            },
            {
                name: '现房出售',
                value: 48568
            },
            {
                name: '在校学生',
                value: 48148
            },
            {
                name: '刻章',
                value: 47425
            },
            {
                name: '实习',
                value: 47230
            },
            {
                name: '佳丽',
                value: 46426
            },
            {
                name: '金发碧眼',
                value: 45964
            },
            {
                name: '北影',
                value: 44294
            },
            {
                name: '税率',
                value: 43793
            },
            {
                name: '各类',
                value: 43414
            },
            {
                name: '平米',
                value: 42808
            },
            {
                name: '餐饮',
                value: 41445
            },
            {
                name: '按摩',
                value: 40109
            },
            {
                name: '建筑',
                value: 40022
            },

            {
                name: '优惠',
                value: 36330
            },
            {
                name: '价格',
                value: 36329
            }
        ]
    }]
};

chart.setOption(option);

window.onresize = chart.resize;
