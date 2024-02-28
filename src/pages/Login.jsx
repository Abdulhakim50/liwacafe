import React from 'react'
import LoginNav from '../components/LoginNav/LoginNav'
import LoginForm from '../components/LoginForm/LoginForm'
import MobileLogin from '../components/MobileLogin/MobileLogin'
import Footer from '../components/footer/Footer'


const Login = ({setLoggedIn}) => {
    return (
        <div className='bg '>
        <LoginNav/>
       <LoginForm setLoggedIn={setLoggedIn}/>
       <MobileLogin setLoggedIn={setLoggedIn}/>
       <Footer/>
    </div>
    
    )
}

export default Login