import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from '../apiCall/axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';


function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = 'Name is required.';
      }

      if (!data.email) {
        errors.email = 'Email is required.';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email address. E.g. example@email.com';
      }
      return errors;
    },
    onSubmit: (formData) => {
      axios.get('/getUpdate').then(data => {
        data.data.updated=new Date()
        localStorage.setItem('currency', JSON.stringify(data.data))
        formik.resetForm();
        navigate('/chart')
      })
    }
  });
  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };
  return (
    <form onSubmit={formik.handleSubmit} className="p-fluid">
      <div className='h-screen flex flex-column justify-content-center'>
        <div className='lg:col-4  sm:col-8 col-10 border-1 border-blue-500 mx-auto grid border-round shadow-8'>
          <div className='col-6 mx-auto'>
            <p className='md:text-3xl sm:text-7xl text-center'>Enter details</p>
            <span className="p-float-label justify-content-center mb-4">
              <InputText className='w-full' id="name" value={formik.values.name} onChange={formik.handleChange} />
              <label htmlFor="name">Username</label>
              {getFormErrorMessage('name')}
            </span>
            <span className="p-float-label mb-4">
              <InputText className='w-full' id="email" value={formik.values.email} onChange={formik.handleChange} />
              <label htmlFor="email">Email</label>
              {getFormErrorMessage('email')}
            </span>
            <div className='flex justify-content-center'>
              <Button type="submit" label="Submit" aria-label="Submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login