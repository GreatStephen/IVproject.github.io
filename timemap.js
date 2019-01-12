mapChart = echarts.init(document.getElementById('timemap'));

// 指定图表的配置项和数据
option = {
    title:{
        text:'北京市热力图',
        left:'center',
        top:15,
        textStyle:{color:'#000'}
    },

    visualMap:{
        type: "continuous",
        min:0,
        max:30000,
        // splitNumber:10,

        calculable:true,
        realtime:true,
        align:"bottom",
        orient:"vertical",
        hoverLink:true,
        range:[800, 1600],
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
        },
        textStyle: {
            color: '#000'
        }
    },

    geo:{
        map:'北京',

        itemStyle:{
            normal:{
                areaColor:'#f9f7e8',
                borderColor:'#111'
            },
            emphasis:{
                areaColor:'#efe8d8'
            }
        },

        label:{
            normal:{show:true}
        }
    },

    backgroundColor:'#f9f7e8',

    series:[
        {
            name:'数量',
            type:'scatter',
            coordinateSystem:'geo',
            blurSize:50,
            //minOpacity:
            //maxOpacity:
            data:myData3
        }
    ],

};


mapChart.setOption(option);