import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import logo3 from '../assets/bank_logo.svg'


const Login = () => {
    const [errMessage, setErrMessage] = useState({})
    const [loginData, setLoginData] = useState({
        name: '',
        password: ''
    })

    const handleLoginChange = (event)=>{
        // const [name, value] = event.target
        const data = {...loginData, [event.target.name] : event.target.value}
        setLoginData(data)
    }

    const loginValidation = (mess)=>{
        mess.preventDefault()
        const loginErrors = {}

        if(!loginData.name.trim()){
            loginErrors.name = 'name is required'
        }

        if(!loginData.password.trim()){
            loginErrors.password = 'enter your password'
        }else if (!loginData.password.match(/\S*/)){
           loginErrors.password = 'we couldn\'t find this profile on our database'      
        } 

        setErrMessage(loginErrors)

        if (Object.keys(loginErrors).length === 0) {
            alert('Welcome, user 0834674521')
        }
    }

    return ( 
        <>
            <div className="login-container">
                <h1>Login to your Account</h1>
                <div className="login-body">
                    {/* <img src={logo3} /> */}
                    <div className="input-value">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' placeholder='Enter your name' onChange={handleLoginChange}/>
                        {errMessage.name && <span>{errMessage.name}</span>}
                    </div>

                    <div className="input-value">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='*******' onChange={handleLoginChange}/>
                        {errMessage.password && <span>{errMessage.password}</span>}
                    </div>

                    <button className='login' onClick={loginValidation}>Login</button>
                    <p>Dont have an account yet? <Link to='/open'>sign up</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;