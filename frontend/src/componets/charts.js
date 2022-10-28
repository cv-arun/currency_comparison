import React, { useState } from 'react';

import { Chart } from 'primereact/chart';


function Charts() {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56]
            }
        ]
    });
    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
       
    };
    return (
        <div className="card">
            <h5>Bar chart</h5>
            <Chart type="bar" data={basicData} options={basicOptions} />
            <p>updated 11 minutes ago</p>
        </div>
    )
}

export default Charts