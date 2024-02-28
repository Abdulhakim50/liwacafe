 import React from 'react'
import ProductsNav from '../components/ProductsNav/ProductsNav'
import ProductList from '../components/ProductList/ProductList'
import Footer from '../components/footer/Footer'

 
 const Products = ({setLoggedIn}) => {


   return (
    <>
    <div
      
      />
     <div>
        <ProductsNav setLoggedIn={setLoggedIn}/>
        <ProductList />
        <Footer/>
     </div>
     </>
   )
 }
 
 export default Products