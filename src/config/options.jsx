export const options = () => {
    return {
        responsive: true,
        animation: {duration: 0},
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            datalabels: {
                color: "#ffffff",
                formatter: (value, context) => context.chart.dataset,
                font: {size: 24},
            }
        }
    }
}