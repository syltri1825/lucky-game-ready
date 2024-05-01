export const data = ({dataTable, backgroundColor, label}) => {
    return {
        labels: dataTable.map((par) => par.id),
        datasets: [{
            label: label,
            data: dataTable.map((par) => par.size),
            backgroundColor: backgroundColor,
        }],
    }
}