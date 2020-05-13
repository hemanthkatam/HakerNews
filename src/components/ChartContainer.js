import React from 'react';
import c3 from 'c3';
// import Chart from 'Chart'
import {Line} from 'react-chartjs-2';

const ChartContainer = (props) => {
    /*     var chart = c3.generate({
            bindto: '#chart',
            data: {
                x: 'x',
                columns: [
                    ['x', 30, 50, 100, 230, 300, 310],
                    ['Y', 0, 250, 300, 430, 500, 610],
                    ['data1', 30, 200, 100, 400, 150, 250]
                ]
            }
        }); */
    const data = {
        labels: [],
        datasets: [
            {
                // label: 'Rainfall',
                // backgroundColor: 'rgba(75,192,192,1)',
                // borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
            }
        ]
    };

    const chartData = props.data;

    chartData.forEach(ele=>{
        data.labels.push(ele.objectID)
        data.datasets[0].data.push(ele.points)
    })
    console.log(data)
    return (
        <div id="chart">
 <Line
          data={data}
          options={{
            title:{
              display:false,
              text:'Votes',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>

    )
}

export default ChartContainer;