import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo3 from '../assets/bank_logo.svg'


const Login = () => {
    return ( 
        <>
            <div className="login-container">
                <h1>Login to your Account</h1>
                <div className="login-body">
                    {/* <img src={logo3} /> */}
                    <div className="input-value">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' placeholder='Enter your name'/>
                        <span></span>
                    </div>

                    <div className="input-value">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='passw' placeholder='*******'/>
                        <span></span>
                    </div>

                    <button className='login'>Login</button>
                    <p>Dont have an account yet? <Link to='/open'>sign up</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;