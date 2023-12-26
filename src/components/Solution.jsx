import './Solution.css'
import bankCard from '../assets/ATM-card.svg'
import sendReceive from '../assets/send-receive.svg'
import nairaBox from '../assets/currency-logo.svg'
import { Link } from 'react-router-dom'


const Solution = () => {
    return ( 
        <div className="solution">
            <div className="top" id='solution'>
                <i className='bx bxl-redux'></i>
                <span>Our Solution</span>
            </div>
            <h2>Our Solution For Your Finance Needs</h2>
            <div className="gridContainer">
                <div className="dd elem1">
                    <img src={bankCard} />
                    <div className="dd-text">
                        <h3>Digital Banking & Finance</h3>
                        <p>Flowbank is a Finance-at-your fingertips</p>
                        <Link to={''}>Learn More <i className='bx bx-right-arrow-alt'></i></Link>
                    </div>
                </div>

                <div className="dd elem2">
                    <img src={sendReceive} />
                    <div className="dd-text">
                        <h3>Digital Banking & Finance</h3>
                        <p>Flowbank is a Finance-at-your fingertips</p>
                        <Link to={''}>Learn More <i className='bx bx-right-arrow-alt'></i></Link>
                    </div>
                </div>

                <div className="dd elem3">
                    <img src={nairaBox} />
                    <div className="dd-text">
                        <h3>Digital Banking & Finance</h3>
                        <p>Flowbank is a Finance-at-your fingertips</p>
                        <Link to={''}>Learn More <i className='bx bx-right-arrow-alt'></i></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Solution;