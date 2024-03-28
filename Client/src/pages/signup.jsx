import './signup.css'
// import logo2 from '../assets/bank_logo.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SignUp = () => {
    
    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }) 

    const handleChange = (e)=>{
        const newobject = {...formData, [e.target.name] : e.target.value}
        setFormData(newobject)
        

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const validationErrors = {}

        

        if (!formData.Name.trim() ) {
            validationErrors.name = 'A name is required';
        } else if(formData.Name.length < 5) {
            validationErrors.name = "Your name must more than 5 characters";
        };

        if(!formData.email.trim()) {
            validationErrors.email = 'An email is required'
        }else if(!formData.email.match(/\S+@\S+\.\S+/)){
            validationErrors.email = 'This is an invalid email';
        }

        if(!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'A phone number is required';
        }else if(!/[0-9]{11}/.test(formData.phoneNumber)){
            validationErrors.phoneNumber = 'This is an invalid phone number';
        }

        if(!formData.password.trim()) {
            validationErrors.password = 'A password is required'
        }else if(formData.password.length < 6){
            validationErrors.password = 'Your Password must be at least 6 chars'
        }

        if (!formData.confirmPassword.trim()){
            validationErrors.confirmPassword = 'Confirm your password'
        }else if(formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = 'Your passwords dont match'
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0){
            alert('You have successfully created an account with Flow Bank!!!')
        }
    }


    return ( 
        <>
        <div className="signupContainer">
            <h1>Sign up / Create Account</h1>
            <div className="signupbody">
                {/* <img src={logo2} /> */}
                <div className="inputs">
                    <label htmlFor="name">Name </label>
                    <input type="text" name="Name" id="name" placeholder='Enter your name here' onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="inputs">
                    <label htmlFor="email">E-mail </label>
                    <input type="email" name="email" id="email" placeholder='Enter your e-mail'onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="inputs">
                    <label htmlFor="phone">Phone No </label>
                    <input type="tel" name="phoneNumber" id="phone" placeholder='080 456 6722'onChange={handleChange}/>
                    {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                </div>
                <div className="inputs">
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" placeholder='*********'onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>} 
                </div>
                <div className="inputs">
                    <label htmlFor="confirmPassword">Confirm password </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder='*********'onChange={handleChange}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>} 
                </div>
                <button type='submit' className='submit' onClick={handleSubmit}>Sign Up</button>
                <p className='redirect'>Already have an account? <Link to="/login" >Log in</Link></p>

            </div>
        </div>
        </>
     );
}
 
export default SignUp;