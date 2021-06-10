Highcharts.chart('container5', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: (7 / 21 * 100) + '%',
        backgroundColor: '#F7C9BC',
        style: {fontFamily:'GmarketSansLight', fontSize: 40, color: 'white'},
        borderRadius: 20
    },
    title: {text: ''},
    subtitle: {
        text: '반려동물 입양 경로',
        align: 'center',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'white'},
        x: 0,
        y: 100,
        zIndex:1
      },
    credits: {enabled: false},
    legend:{ enabled:false },
    tooltip: {
        style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
        borderColor: '#F7C9BC',
        shadow: false,
        padding: 20,
        backgroundColor: 'white',
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: 10,
                style: {
                    color: 'black',
                    textOutline: false,
                    fontSize: 16,
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '90%'],
            size: '150%',
            colors: ['#EDE8DF','#EDE8DF','white'],
            borderWidth: 4,
            borderColor: '#F7C9BC'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '80%',
        data: [
            ['지인 무료 분양', 57.0],
            ['펫샵・브리더 유료 분양', 35.4],
            ['보호센터 입양', 4.8],]
    }]
});
