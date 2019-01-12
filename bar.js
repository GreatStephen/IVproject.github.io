var dom = document.getElementById("bar");
myChart = echarts.init(dom);
option = null;
option = {
    title: {
        text: '柱形图',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000000'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        top:45,
        data:['办证发票','假冒身份','色情服务','地产广告','其他']
    },
    backgroundColor:"#f9f7e8",
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['0','2','4','6','8','10','12','14','16','18','20','22']
    },
    series: [
        {
            name: '办证发票',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [20239, 11789, 24382, 197858, 342084, 252307, 181166, 179651, 293132, 291461, 96890, 37455]
        },
        {
            name: '假冒身份',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [2449, 1567, 2766, 14045, 60479, 157606, 136484, 137546, 117973, 68963, 9289, 4676]
        },
        {
            name: '色情服务',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [24003, 367, 264, 832, 1870, 2576, 4155, 8054, 21043, 94865, 109099, 69436]
        },
        {
            name: '地产广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [641, 639, 707, 4281, 25368, 33653, 30028, 17023, 7583, 4164, 1645, 1298]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [3047, 897, 1572, 10607, 32558, 42293, 37805, 33830, 35196, 31634, 16537, 7125]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}