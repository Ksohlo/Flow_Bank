import './Why.css'
import spending from '../assets/spending-amount.svg'
import medal from '../assets/medal-solid.svg'


const Why = () => {
    return ( 
        <>
            <div className="whyCont">
                <img src={spending}  />

                <div className="whyUs"> 
                    <div className="why">
                        <i className='bx bxs-send'></i>
                        <span>Why Us</span>
                    </div>
                    <h2>Why do you Need us</h2>
                    <div className="reasonss">
                        <div className="reason">
                            <img src={medal} />
                            <div className="tex">
                                <h3>Customer Loyalty</h3>
                                <p>We offer the best services to customers, always making sure to keep them happy and fulfilled</p>
                            </div>
                        </div>
                        <div className="reason">
                            <img src={medal} />
                            <div className="tex">
                                <h3>Fully Licensed</h3>
                                <p>We are fully licensed to perform fully for you, so you can focus on getting the best payment service for you and your family</p>
                            </div>
                        </div>
                        
                        <div className="reason">
                            <img src={medal} />
                            <div className="tex">
                                <h3>Flexible and Reliable</h3>
                                <p>We offer unique features and terms that works for you. So that you can experience the best payment services at your fingertips</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Why;