import React from 'react';
import '../App.css';
import { useState ,useEffect} from 'react';
import './HeroSection.css';
import './Button.css';

function HeroSection() {
  const [click, setClick] = useState(true);
  
  

  useEffect(() => {
    console.log('click is: ', click);
  },[click]);

  return (
    
    <div className= {click? 'hero-container' : 'hero-container2'}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src='./images/FireworkBackground.jpg'/> */}
      {/* <div className='hero-panel-hiding'>
        <Button 
          buttonSize='btn--tiny'
          buttonStyle='btn--round'
        >
        </Button>
      </div>     */}
        <div className='hero-panel'>
          <h1>DoYoung Ha</h1>
          <p onClick={()=> setClick((click) => !click)}>DYary</p>
          {/* <h2>Do young, Be young, stay young</h2> */}
          {/* <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GOD Give me a JackPot
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              WHO I AM <i className='far fa-play-circle' />
            </Button>
          </div> */}
        </div>
    </div>
    
  );
}

export default HeroSection;
