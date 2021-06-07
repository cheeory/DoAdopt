Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

Highcharts.chart('container3', {

    chart: {
        height: (9 / 16 * 100) + '%', // 16:9 ratio
        style: {fontFamily:'GmarketSansLight', fontSize: 16, color: 'white'},
        borderRadius: 20
    },

    title: {text: ''},
    subtitle: {
        text: '지속적인 구조 유기 동물 증가',
        align: 'middle',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'#ececec'},
        x: 100,
        y: 110,
        zIndex:1
      },
    credits: {enabled: false},
    legend:{ enabled:false },
    

    yAxis: {
        title: {
            text: '',
        },
        labels: {enabled: false},
        gridLineColor: '#ffffff',
    },

    xAxis: {
        lable: {
            style : {
                color: 'red'
            }
        }
    },

    tooltip: {
        style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
        headerFormat: undefined,
        borderColor: '#F7C9BC',
        shadow: false,
        padding: 20,
        backgroundColor: 'white',
        pointFormat: '{point.x}년 유실·유기동물현황<br/><b>{point.y}마리</b>'
},
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false,
            },
            pointStart: 2016,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 3,
                fillColor: '#F7C9BC'
            }
        }
    },

    series: [{
        name: '유실·유기동물현황',
        lineColor: '#F7C9BC',
        data: [90000,103000,121077,135791,130401]
    }],


});