import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function Login() {
  const [value, setValue] = useState('')
  return (
    <div className='h-screen flex flex-column justify-content-center'>


      <div className='lg:col-4  sm:col-8 col-10 border-1 border-blue-500 mx-auto grid border-round shadow-8'>
        <div className='col-6 mx-auto'>
          <p className='md:text-3xl sm:text-7xl text-center'>Enter details</p>
          <span className="p-float-label justify-content-center mb-4">
            <InputText className='w-full' id="username" value={value} onChange={(e) => setValue(e.target.value)} />
            <label htmlFor="username">Username</label>
          </span>
          <span className="p-float-label mb-4">
            <InputText className='w-full' id="email" value={value} onChange={(e) => setValue(e.target.value)} />
            <label htmlFor="email">Email</label>
          </span>
          <div className='flex justify-content-center'><Button label="Submit" aria-label="Submit" /></div>
        </div>
      </div>

    </div>
  )
}

export default Login