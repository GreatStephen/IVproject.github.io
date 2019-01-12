dom = document.getElementById("pie");
myChart = echarts.init(dom);
option = null;
option = {
    title: {
        text: '垃圾短信分类',
        left: 'center',
        top: 15,
        textStyle: {
            color: '#000000'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    backgroundColor:"#f9f7e8",

    legend: {
        orient: 'horizontal',
        x: 'center',
        top:50,
        data:['办证发票','假冒身份','色情服务','地产广告','其他']
    },

    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:1928414, name:'办证发票'},
                {value:713843, name:'假冒身份'},
                {value:336564, name:'色情服务'},
                {value:127030, name:'地产广告'},
                {value:253101, name:'其他'}
            ].sort(function (a, b) { return a.value - b.value; }),
            label: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                        color: '#000000'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#7c5666'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },


            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}