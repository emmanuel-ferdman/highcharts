Highcharts.chart('container', {
    chart: {
        type: 'pictorial',
        inverted: true
    },

    title: {
        text: 'Plastic Items Dominate Ocean Garbage'
    },

    subtitle: {
        text: 'Source: ' +
        '<a href="https://www.statista.com/chart/25056/waste-items-polluting-oceans/" ' +
        'target="_blank">Statista</a>'
    },

    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    tooltip: {
        headerFormat: '',
        valueSuffix: ' %'
    },

    plotOptions: {
        series: {
            groupPadding: 0,
            pointPadding: 0,
            dataLabels: {
                enabled: true,
                format: '{y} %'
            },
            stacking: 'percent',
            paths: [{
                definition: 'm 76.60325,208.90684 0,0.125 -2.88713,0 c 0.18201,14.37834 0.15691,30.49423 0.15691,40.59375 -13.29687,0.10181 -11.86722,10.95592 -11.36026,21.28125 0.18954,3.86016 -2.97153,10.26522 0.34521,10.71875 16.75301,2.29078 1.83567,21.21004 1.3808,33.125 2.12733,19.48842 -67.21057,91.20911 -66.84348,132.3125 0.27794,31.12076 20.96281,54.72363 0.25106,79.71875 -11.12909,25.91165 21.82208,49.41752 0.12553,71.65625 -5.55341,76.97268 -1.98246,153.98565 -0.59626,230.96875 1.6405,24.30604 4.89968,50.38499 18.29566,71.28125 11.12533,20.62307 48.95478,26.37682 55.20078,-0.9375 16.22008,12.50436 18.35739,15.82362 45.8176,18.34375 l 0,0.0312 c 0.0639,-0.006 0.12453,-0.0258 0.18829,-0.0312 0.0742,0.007 0.14539,0.0249 0.21967,0.0312 l 0,-0.0312 c 28.84948,-0.67869 40.63347,-14.74888 45.817593,-18.34375 6.246005,27.31432 44.07545,21.56057 55.200786,0.9375 13.395979,-20.89626 16.655159,-46.97521 18.295655,-71.28125 1.386197,-76.9831 4.957147,-153.99607 -0.596256,-230.96875 -21.696551,-22.23873 11.254618,-45.7446 0.125527,-71.65625 -20.711751,-24.99512 0.04975,-48.59741 0.251056,-79.71875 0.265546,-41.05312 -66.976414,-108.79695 -64.835033,-132.3125 -0.454872,-11.91496 -16.459558,-32.46037 0.407965,-33.65625 2.903946,-0.20588 1.090132,-6.40822 0.721784,-9.65625 -1.074256,-9.47254 1.81295,-21.74865 -11.705454,-21.9375 0.02017,-10.44874 -1.47495,-40.5 -1.47495,-40.5 l -5.868413,-0.0937 c -0.008,0.0411 -0.0239,0.0837 -0.0313,0.125 l -76.60325,-0.125 z'
            }]
        }
    },

    series: [{
        name: 'Plastic bags',
        data: [14.1]
    },
    {
        name: 'Plastic bottles',
        data: [11.9]
    },
    {
        name: 'Food containers/cutlery',
        data: [9.4]
    },
    {
        name: 'Wrappers',
        data: [9.1]
    },
    {
        name: 'Synthetic rope',
        data: [7.9]
    },
    {
        name: 'Fishing items',
        data: [7.6]
    },
    {
        name: 'Plastic caps/lids',
        data: [6.1]
    },
    {
        name: 'Industrial packaging',
        data: [3.4]
    },
    {
        name: 'Glass bottles',
        data: [3.4]
    },
    {
        name: 'Drinks cans',
        data: [3.2]
    }
    ]
});