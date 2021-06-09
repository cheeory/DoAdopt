Highcharts.chart('container4', {

    chart: {
        type: 'bar',
        height: (9 / 16 * 100) + '%', // 16:9 ratio
        style: {fontFamily:'GmarketSansLight', fontSize: 16, color: 'white'},
        borderRadius: 20
    },
    title: {
        text: '안락사 21.8%　　 　자연사 24.8%',
        align: 'right',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansLight', fontSize: 12, color:'#C4C4C4'},
        x: -25,
        y: 25,
        zIndex:3
      },
    subtitle: {
        text: '구조한 유실·유기동물의 행보',
        align: 'middle',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'#ececec'},
        x: 110,
        y: 110,
        zIndex:3
      },
    credits: {enabled: false},
    legend:{ enabled:false },

    xAxis: {
        categories: ['Apples'],
        labels: {enabled: false},
        gridLineColor: '#ffffff',
    },
    yAxis: {
        min: 0,
        title: {text: ''},
        gridLineColor: '#ffffff',
        max: 100
    },

    plotOptions: {
        series: {
            stacking: 'normal',
            pointWidth: 30
        }
    },
    tooltip: {
        style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
        headerFormat: undefined,
        borderColor: '#F7C9BC',
        shadow: false,
        padding: 20,
        backgroundColor: 'white',
        pointFormat: '{series.name} <b>{point.y}%</b>'
},

    series: [{
        name: '자연사',
        color: '#F7C9BC',
        data: [24.8]
    }, {
        name: '안락사',
        color: '#F7D7A8',
        data: [21.8]
    }, {
        name: '인도',
        color: '#DDD3C5',
        data: [12.1]
    }, {
        name: '분양',
        color: '#DDD3C5',
        data: [27.8]
    }, {
        name: '기타',
        color: '#DDD3C5',
        data: [1.8]
    }, {
        name: '보호중',
        color: '#DDD3C5',
        data: [11.7]
    }

]
});
