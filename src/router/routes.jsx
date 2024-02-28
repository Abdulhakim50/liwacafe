import React from 'react'
import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Login from '../pages/Login'
import { useState,useEffect } from 'react'
 import Practice from '../pages/Practice'
 import FilterPage from '../pages/FilterPage'

import InformationPage from '../pages/InformationPage'


const Routers = () => {

  const [isLoggedIn, setLoggedIn] = useState(() => {
 
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  });


  useEffect(() => {
   
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path="products" element={ isLoggedIn ?<Products  isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/> : <Navigate to="/"/>   } />
      <Route path="info" element={ isLoggedIn ? <InformationPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/> :<Navigate to="/"/>  } />
      <Route path="try" element={ <Practice/> } />
      <Route path="filter" element={ isLoggedIn ? <FilterPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/> :<Navigate to="/"/>  } />


    </Routes>
  </BrowserRouter>
  )
}

export default Routers