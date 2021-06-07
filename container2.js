Highcharts.chart('container2', {
    chart: {
        type: 'packedbubble',
        height: '450px',
        borderRadius: 20,
    },
    title: {text: ''},
    subtitle: {
        text: '— 양육 포기 또는 파양 고려 이유',
        align: 'middle',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'#ececec'},
        x: 30,
        y: 200,
        zIndex:1
      },
    credits: {enabled: false},
    legend:{enabled:false},
    tooltip: {
        useHTML: true,
        borderColor: '#EDE8DF',
        shadow: false,
        padding: 15,
        backgroundColor: 'white',
        style : {fontFamily:'GmarketSansLight', fontSize: 14},
        pointFormat: '{point.name}: {point.value}% '
    },
    plotOptions: {
        packedbubble: {
            minSize: '10%',
            maxSize: '400%',
            zMin: 0,
            zMax: 500,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.01
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 3
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontFamily:'GmarketSansLight',
                    fontSize: 14
                }
            }
        }
    },
    series: [{
        name: '1위',
        data: [{
            name: '행동 문제',
            value: 29.4,
            color: '#F7C9BC'
        }]
    },
    
    {
        name: '2위',
        data: [{
            name: "여건 변화",
            value: 20.5,
            color: '#F7D7A8'
        }]
    }, 
    {
        name: '3위',
        data: [{
            name: "지출",
            value: 18.9,
            color: '#D3EAE9'
        }]
    }, 
    {
        name: '4위',
        data: [{
            name: "질병",
            value: 14.0,
            color: '#DAEAC1'
        }]
    }, 
    {
        name: '5위',
        data: [{
            name: "시간 소요",
            value: 12.6,
            color: '#D3CEE9'
        }]
    }, 
    {
        name: '6위',
        data: [{
            name: "외모 변화",
            value: 3.3,
            color: '#E5A3A3'
        }]
    }, 
    {
        name: '7위',
        data: [{
            name: "기타",
            value: 1.4,
            color: '#EDE8DF'
        }]
    }]
});
