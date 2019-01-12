let mapChart = echarts.init(document.getElementById('heatmap'));

// 指定图表的配置项和数据
let option = {
    title:{
        text:'北京市热力图',
        left:'center',
        top:15,
        textStyle:{color:'#000'}
    },

    visualMap:{
        //type: "continuous",
        min:0,
        max:10000,
        // splitNumber:10,
        pieces:[
            {max:999},
            {min:1000, max:1999},
            {min:2000, max:2999},
            {min:3000, max:3999},
            {min:4000, max:4999},
            {min:5000}
        ],
        //calculable:true,
        //realtime:true,
        // align:"bottom",
        // orient:"vertical",
        hoverLink:true,
        //range:[800, 1600],
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
                areaColor:'#efe8d8',
                borderColor:'#111'
            },
            emphasis:{
                areaColor:'#32b67a'
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
            type:'heatmap',
            coordinateSystem:'geo',
            blurSize:50,
            //minOpacity:
            //maxOpacity:
            data:myData2
        }
    ]

};

mapChart.setOption(option);