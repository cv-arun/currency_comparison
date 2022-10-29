import React from 'react'

import Charts from '../componets/charts';
import Stats from '../componets/stats';

function HomePage() {
  return (
    <>
      <div className="card lg:col-8 mx-auto">
      <h5 className='text-center'>Rate of currency equalent to 1 USD</h5>
        <Charts />
        <Stats/>

      </div>
    </>

  )
}

export default HomePage