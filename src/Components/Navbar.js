import { Button } from './Button';
import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './HeroSection.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  },[]);
  window.addEventListener('resize',showButton);

  const changeBackGround = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackGround);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          {/* <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='./images/ChillSelfie.jpg' className='logo'
            style={{width: 60, height: 60, borderRadius: 60/ 2}}/>
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/information' className='nav-links' onClick={closeMobileMenu}>
                Information
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/career' className='nav-links' onClick={closeMobileMenu}>
                Career
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/post' className='nav-links' onClick={closeMobileMenu}>
                Post
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
};

export default Navbar;