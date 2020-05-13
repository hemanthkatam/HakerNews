import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartContainer = (props) => {
    const data = {
        labels: [],
        datasets: [
            {
                borderWidth: 2,
                data: []
            }
        ]
    };

    const chartData = props.data;

    chartData.forEach(ele => {
        data.labels.push(ele.objectID)
        data.datasets[0].data.push(ele.points)
    })
    return (
        <div id="chart">
            <Line
                data={data}
                options={{
                    title: {
                        display: false,
                        text: 'Votes',
                        fontSize: 20
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                }}
            />
        </div>

    )
}

export default ChartContainer;