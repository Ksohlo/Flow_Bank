import './Footer.css'
import logo from '../assets/bank_logo.svg'
import apple from '../assets/apple.svg'
import facebook from '../assets/facebook.svg'
import googlePlay from '../assets/google-play.svg'
import google from '../assets/google.svg'
import whatsapp from '../assets/whatsapp.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
    return ( 
        <>
            <div className="footContainer">
                <div className="footTop">
                    <a href=""><img src={logo} className='logo'/></a> 
                    <div className="foot">
                        <div className="elem">
                            <h4>Products</h4>
                            <ul>
                                <li><a href="">Business Thinking</a></li>
                                <li><a href="">Consumer Banking</a></li>
                                <li><a href="">Digital Freelancers</a></li>
                                <li><a href="">Customers</a></li>
                            </ul>
                        </div>

                        <div className="elem">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="">Guides</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Road Map</a></li>
                                <li><a href="">Security</a></li>
                            </ul>
                        </div>

                        <div className="elem">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Career</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">Privacy & Policy</a></li>
                            </ul>
                        </div>

                        <div className="elem">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="">Get Help</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="social">
                    <a href='#'><img src={googlePlay} /></a>
                    <a href='#'><img src={google} /></a>
                    <a href='#'><img src={youtube} /></a>
                    <a href='#'><img src={whatsapp} /></a>
                    <a href='#'><img src={apple} /></a>
                    <a href='#'><img src={facebook} /></a>
                </div>  

                <hr />

                <p>FlowBank Copyright <span className='year'>2023</span>. All Right Reserved</p>      
            </div>
                
        </>
     );
}
 
export default Footer;