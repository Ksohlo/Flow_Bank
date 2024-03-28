import './Home.css'
import image from '../assets/spending-amount.svg'
import Solution from '../components/Solution';
import Why from '../components/Why';
import Explore from '../components/Explore';
import Subsciption from '../components/Subscription';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>
            <div className="body">
                <div className="left">
                    <div className="top">
                        <i className='bx bxs-bank' ></i>
                        <span>Finance-at-your-fingertips</span>
                    </div>
                    <h1>Best <span className="purple">Payment</span> Service For You</h1>
                    <p>Flowbank is a Finance-at-your-fingertips platform that has everything you need to gain finance freedom. Thousands of users rely on us to support them with the best services, in one platform.</p>
                    <Link to="/open">Open An Account <i className='bx bx-right-arrow-alt'></i></Link>
                </div>
                <img src={image} className="right" />
            </div>
            <div className="bottom">
                <div className="bxx">
                    <h2>21M+</h2>
                    <p>Registered Users</p>
                </div>
                <div className="bar"></div>
                <div className="bxx">
                    <h2>96%</h2>
                    <p>Revenue Growth</p>
                </div>
                <div className="bar"></div>
                <div className="bxx">
                    <h2>123B+</h2>
                    <p>Revenue Total</p>
                </div>
            </div>
            <div className="capsule">
                <Solution />
                <Why />
                <Explore />
                <Subsciption />
                <Footer />
            </div>
            
        </>
     );
}
 
export default Home;