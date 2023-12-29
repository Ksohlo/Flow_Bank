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
        const [name, value] = e.target

        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e)=>{
        const validationErrors = {}

        

        if (!formData.Name.trim() ) {
            validationErrors.name = 'A name is required'
        } 

        if(!formData.email.trim()) {
            validationErrors.email = 'An email is required'
        }else if(!formData.email.match(/[a-z A-Z 0-9 \- \_]* [@] [a-z]{2,7} [\.] [a-z]{2,3} \$/)){
            validationErrors.email = 'This is an invalid email'
        }

        if(!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'A phone number is required'
        }else if(!formData.email.match(/[0] [7 8 9] [0-9]{9} \$/)){
            validationErrors.phoneNumber = 'This is an invalid phone number'
        }

        if(!formData.password.trim()) {
            validationErrors.password = 'A password is required'
        }else if(!formData.password.length < 6){
            validationErrors.password = 'A password is needed'
        }

        if (!formData.confirmPassword.trim()){
            validationErrors.confirmPassword = 'Confirm your password'
        }else if(formData.confirmPassword !== formData.password) {
            validationErrors.email = 'Your passwords dont match'
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors) === 0){
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
                    <input type="text" name="name" id="name" placeholder='Enter your name here' onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="inputs">
                    <label htmlFor="email">E-mail </label>
                    <input type="email" name="email" id="email" placeholder='Enter your e-mail'onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="inputs">
                    <label htmlFor="phone">Phone No </label>
                    <input type="tel" name="phone" id="phone" placeholder='080 456 6722'onChange={handleChange}/>
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