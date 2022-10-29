import React, { useEffect, useState } from 'react';
import Moment from 'react-moment'
import { Chart } from 'primereact/chart';



function Charts() {
    const [xvalue, setXvalue] = useState([])
    const [yvalue, setYvalue] = useState([])
    const [basicData, setBasicData] = useState({})
    const [lastApiCall, setLastApiCall] = useState('1976-04-19T12:59-0500')
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('currency'))
        console.log(data.otherCurrency)
        let x = data.otherCurrency.map((current) => current.value.toFixed(2))
        setXvalue(x)
        let y = data.otherCurrency.map((current) => current.code)
        setYvalue(y)
        setLastApiCall(data.updated)
    }, [])
    useEffect(() => {
        setBasicData({
            labels: yvalue,
            datasets: [
                {
                    label: 'current rates comparing to 1 USD',
                    backgroundColor: '#42A5F5',
                    data: xvalue
                }
            ]
        })
    }, [yvalue, xvalue])
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
        <div >
            <Chart type="bar" data={basicData} options={basicOptions} />
            <p>*last updated <Moment fromNow ago>{lastApiCall}</Moment> ago</p>
        </div>
    )
}

export default Charts