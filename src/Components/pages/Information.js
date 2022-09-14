import React from 'react'
import '../../App.css'
import './Information.css';
import { useState ,useEffect} from 'react';

export default function Information(){
    const [click, setClick] = useState(false);
    
    useEffect(() => {
        console.log('click is: ', click);
      },[click]);

    return (
    <div>
        <h1 className='information' >Welcome</h1>
        <section className='features_info'>
            <div className='information-container'>
                <div className='info-introduction' onClick={()=> setClick((click) => !click)}> 
                    <div className='info-panel'>
                        <img className= {click? 'info-selfie' : 'info-selfie2'}/>
                        <h2>Hello,<br></br>I'm software engineer from korea and currently living in New York. </h2>
                    </div>
                </div>
                <div className='info-col'>
                    <div className='info-panel'>
                        <img className='info-img' src='./images/engineering2.png'/>
                        <p1>This is my blog mostly about Software Engineering study and my daily life. </p1>
                    </div>
                    <div className='info-panel'>
                        <img className='info-img' src='./images/cSharp.png'/>
                        <p1>I mostly write C# and javascript code basis at work and for my personal projects. </p1>
                    </div>
                    <div className='info-panel'>
                        <img className='info-img' src='./images/newyork2.png'/>
                        <p1>I'm currently living in New York and I want to share my daily life to you guys. </p1>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}