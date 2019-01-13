mapChart = echarts.init(document.getElementById('class1'));

// 指定图表的配置项和数据
option = {
    title: {
        text: '办证发票',
        left: 'center',
        top: 65,
        left:450,
        textStyle: { color: '#000' }
    },

    // visualMap: {
    //     type: "continuous",
    //     min: 0,
    //     max: 24,
    //     // splitNumber:10,

    //     calculable: true,
    //     realtime: true,
    //     align: "bottom",
    //     orient: "vertical",
    //     hoverLink: true,
    //     range: [0, 2],
    //     inRange: {
    //         color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
    //     },
    //     textStyle: {
    //         color: '#000'
    //     }
    // },

    geo: {
        map: '北京',

        itemStyle: {
            normal: {
                areaColor: '#efe8d8',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#32b67a'
            }
        },

        label: {
            normal: { show: true }
        },
        top:100,
        left:200
    },

    backgroundColor: '#f9f7e8',

    series: [
        {
            name: '数量',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 4,

            data: myData5
        }
    ],

};


mapChart.setOption(option);