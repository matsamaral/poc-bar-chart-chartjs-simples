var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 Serie', '2 Serie', '3 Serie'],
        datasets: [{
                label: 'Janeiro',
                data: [70, 50, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Fevereiro',
                data: [30, 20, 70],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            },
            {
                type: 'bar',
                label: 'line',
                datalabels: {
                    labels: {
                        title: null
                    }
                },
                tooltips: {
                    enabled: false
                },
                fill: false,
                data: [23.4, 23.4, 23.4],
                backgroundColor: '#000',
                order: 0
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            datalabels: {
                color: '#36A2EB',
                clamp: 'true',
                color: '#fff',
                textStrokeColor: '#000',
                textStrokeWidth: 3,
                textShadowBlur: 3,
                textShadowColor: '#000',
                padding: {
                    top: 12
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }]
        }
    }
});