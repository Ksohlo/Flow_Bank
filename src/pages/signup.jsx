import './signup.css'
import logo2 from '../assets/bank_logo.svg'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return ( 
        <>
        <div className="signupContainer">
            <h1>Sign up / Create Account</h1>
            <div className="signupbody">
                {/* <img src={logo2} /> */}
                <div className="inputs">
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name" id="name" placeholder='Enter your name here'/>
                    <span></span>
                </div>
                <div className="inputs">
                    <label htmlFor="email">E-mail </label>
                    <input type="email" name="email" id="email" placeholder='Enter your e-mail'/>
                    <span></span>
                </div>
                <div className="inputs">
                    <label htmlFor="phone">Phone No </label>
                    <input type="tel" name="phone" id="phone" placeholder='080 456 6722'/>
                    <span></span>
                </div>
                <div className="inputs">
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" placeholder='*********'/>
                    <span></span> 
                </div>
                <button type='submit' className='submit'>Sign Up</button>
                <span className="button-err"></span>
                <p className='redirect'>Already have an account? <Link to="/login" >Log in</Link></p>

            </div>
        </div>
        </>
     );
}
 
export default SignUp;