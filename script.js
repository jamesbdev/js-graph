const ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['UK', 'Peru', 'Chile', 'US', 'Brazil', 'Mexico', 'Bolivia', 'Columbia', 'Iran', 'South Africa'],
        datasets: [{
            label: 'Death per 100,000 habitants',
            data: [70.16, 64.55, 53.45, 49.65, 47.97, 41.21, 31.59, 25.26, 22.33, 17.67],
            backgroundColor: [
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)',
                'rgba(229, 1, 37, 1)'
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});