import './Subsciption.css'



const Subsciption = () => {
    return ( 
        <>
            <div className="box-container">
                <h1>Start your financial freedom with us.</h1>
                <div className="inputContainer">
                    <input type="email" name="mail" id="email" className='email' placeholder='Your E-mail' />
                    <button type="submit" className='submit'> <span>Get Started</span> <i className='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>        
        </>
     );
}
 
export default Subsciption;