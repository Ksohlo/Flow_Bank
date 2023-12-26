import './NavBar.css'
import logo from '../assets/bank_logo.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';




const NavBar = () => {
    const [value, setValue] = useState('bx bx-menu')
    const [click, setClick] = useState(false)
    const [theme, setTheme] = useState('bx bxs-moon')
    
    const showMenu = ()=>{
       if (value === 'bx bx-menu') {
        setValue('bx bx-x')
       } else {
        setValue('bx bx-menu')
       }
       setClick(!click)
    }

    const hideMenu = ()=>{
        setClick(false)
        setValue('bx bx-menu')
    }

    const setTheeme = ()=>{
        let Theme
        let themeKey = 'Theme'
        if(theme === 'bx bxs-moon'){
            setTheme('bx bx-sun')
            Theme = 'night'
            document.querySelector('body').setAttribute('data-theme', Theme)
            useLocalStorage(themeKey, Theme)
        }else{
            setTheme('bx bxs-moon')
            Theme = 'day'
            document.querySelector('body').setAttribute('data-theme', Theme)
            useLocalStorage(themeKey, Theme)

        }
    }

    return ( 
        <>
        <nav className="nav-bar">
            <Link to="/"><img src={logo} /></Link>
            
           <div className={click ? "rightt active" : "rightt"} onClick={hideMenu}>
                <ul className="nav-links" >
                    {/* <i className='bx bx-x'></i> */}
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Resources</Link></li>
                    <li><Link to="">Company</Link></li>
                    <li><Link to="">Support</Link></li>
                </ul>
                <div className="user">
                    <Link to="/login" id="login">Login</Link>
                    <Link to="/open" id="signup">Sign Up</Link>
                </div>
            </div>
            <div className="theme">
                <i className={theme} onClick={setTheeme}></i>
                {/* <i className='bx bxs-moon'></i> */}
            </div>
            
            <div className="menu" onClick={showMenu}>
                <i className={value} onClick={ showMenu}></i>
            </div>
            
        </nav>
        </>
     );
}
 
export default NavBar;