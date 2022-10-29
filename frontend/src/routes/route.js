import React from 'react'
import {Route,Routes} from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/homePage';

function mainRoutes() {
  return (
   <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/chart' element={<HomePage/>}/>
   </Routes>
  )
}

export default mainRoutes