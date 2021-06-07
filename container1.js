// Build the chart
Highcharts.chart('container1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#F7C9BC',
        borderRadius: 20,
    },
    title: {
        text: '28.1%',
        align: 'center',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansMedium', fontSize: 40, color:'#666666'},
      },
    credits: {enabled: false},

    tooltip: {
        style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
        borderColor: '#555555',
        shadow: false,
        padding: 15,
        backgroundColor: 'white',
        pointFormat: '{point.y}%</b>'
    },
    plotOptions: {
        pie: {
            size: '90%',
            colors: ['white','#EDE8DF'],
            borderWidth: 6,
            borderColor: '#F7C9BC',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        innerSize: '75%',
        name: '',
        colorByPoint: true,
        data: [{
            name: '파양 경험이 있다',
            y: 28.1
        },
        {
            name: '파양 경험이 없다',
            y: 71.9,
            sliced: false,
        }
    ]
    }]
});


// selected: true 계속 선택되어있게 하는거