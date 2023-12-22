import './Explore.css'
import world from '../assets/basic_world.svg'
import box from '../assets/box-box.svg'
import naira from '../assets/naira-box.svg'
import zeroBox from '../assets/start-0.svg'

const Explore = () => {
    return ( 
        <>
            <div className="container">
                <div className="exTop">
                    <img src={world} />
                    <span>Explore</span>
                </div>
                <h2>Get To Know Us</h2>

                <div className="elements">
                    <div className="safe">
                        <img src={naira} />
                        <div className="text">
                            <h3>How safe is flowbank, are your funds secured </h3>
                            <p>3 mins Read</p>
                            <div className="details">
                                <div className="finance">Finance</div>
                                <div className="security">Security</div>
                            </div>
                            <p className='date'>12, May 2023</p>
                        </div>
                    </div>

                    <div className="safe">
                        <img src={box} />
                        <div className="text">
                            <h3>How safe is flowbank, are your funds secured </h3>
                            <p>3 mins Read</p>
                            <div className="details">
                                <div className="finance">Finance</div>
                                <div className="security">Security</div>
                            </div>
                            <p className='date'>12, May 2023</p>
                        </div>
                    </div>

                    <div className="safe">
                        <img src={zeroBox} />
                        <div className="text">
                            <h3>How safe is flowbank, are your funds secured </h3>
                            <p>3 mins Read</p>
                            <div className="details">
                                <div className="finance">Finance</div>
                                <div className="security">Security</div>
                            </div>
                            <p className='date'>12, May 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Explore;
