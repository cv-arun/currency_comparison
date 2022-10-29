import React, { useEffect, useState } from 'react'

function Stats() {
    const [inr, setInr] = useState('')
    const [highest,setHighest]=useState({})
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('currency')).otherCurrency
        setInr(data[2].value.toFixed(2))
        setHighest(data[0])
    }, [])
    return (
        <div className='card sm:flex flex-wrap justify-content-around '>
            <div className='card border-2 h-6rem w-3 flex align-content-center justify-content-center'>
                <p className='flex align-items-center'>{inr?`1 USD is equvalent to ${inr} Rs`:''}</p>
            </div>
            <div className='card border-2 h-6rem w-3 flex align-content-center justify-content-center '>
                <p className='flex align-items-center'>{highest?`'${highest.code}' has highest value`:''}</p>
            </div>
        </div>
    )
}

export default Stats