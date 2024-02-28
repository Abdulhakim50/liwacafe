import React from 'react'
import { Navigate } from 'react-router-dom';
import './style.css'


const ProductsNav = ({setLoggedIn}) => {
  return (
    <div className='productnavcont'>
   <div className='productnavwrapper'>
   <a href='/' className=' Poppins'>Liwa<span className=' Poppins'>Soft</span></a>
     <div onClick={()=>{setLoggedIn(false); <Navigate replace to={"/"}/>}} className='Poppins'>Logout</div>
     </div>
    </div>
  )
}

export default ProductsNav