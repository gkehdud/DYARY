import React from 'react'
import '../../App.css'
import './Career.css';

export default function Career(){
    return (
        <div>
        <h1 className='career'>Career</h1>
        <section className='features_info'>
            <div className='career-container'>
                <div className='career-col'>
                    <div className='career-panel'>
                        <img className='career-img' src='./images/KMU.jpg'/>
                        <div className='careercontent-col'>
                            <p2>MARCH 2013 – FEBRUARY 2019</p2>
                            <p3>KEIMYUNG UNIVERSITY - DAEGU, KR</p3>
                            <p4>-COMPUTER SCIENCE AND ENGINEERING</p4>
                            <p1>▶ GPA: 3.75/4.5</p1>
                            <p1>▶ Projects : Library management system(C# project), Package management system (Java with Raspberry Pi & Arduino), Unity game project (Leap Motion), Shopping website project(PHP)</p1>
                            <p1>▶ Related Courses : C, java, MySQL, MSSQL, PHP, Unity, Data Structure, Computer Network</p1>
                        </div>
                    </div>
                    <div className='career-panel'>
                        <img className='career-img' src='./images/QUALCOMM2.png'/>
                        <div className='careercontent-col'>
                            <p2>JULY 2017 – NOVEMBER 2017</p2>
                            <p3>COMPLETION OF QUALCOMM INSTITUTE THROUGH ON - CAMPUS PROGRAM</p3>
                            <p5>▶ Android app project(Building escape app using fire alarm sensor) </p5>
                        </div>
                    </div>
                    <div className='career-panel'>
                        <img className='career-img' src='./images/bcs.png'/>
                        <div className='careercontent-col'>
                            <p2>DECEMBER 2018 – MARCH 2022</p2>
                            <p3>BCS INTERNATIONAL CORP - LIC, NY</p3>
                            <p4>-SOFTWARE DEVELOPER</p4>
                            <p5>▶ Developed a proprietary ERP program from the ground up using C# Winforms for all departments in the company, including sales, AR, AP, PO, stock, logistics, and Accounting. </p5>
                            <p5>▶ Created an iPad app for the sales team to send order through a private server, increasing the rate of processing sales and cut back on necessary manual labor. </p5>
                            <p5>▶ Implemented a barcode scanner for the warehouse and a fully digitized inventory management by LOT number system as well as automation of delivery route planning with Google Map API to cut back on half of the AR and Logistics team members and time unnecessarily spent online.</p5>
                            <p5>▶ Duplicated the windows server with a Windows Server Virtual Machine in LA to safeguard and back up our server to minimize date loss in case of an emergency. </p5>
                            <p5>▶ Constantly develop, maintain, and review the ERP program and the server to increase functionality, stability, and efficiency of all departments to maximize the productivity of the company. </p5>
                            <p5>▶ Lead collaboration with third party auditing company to assess and certify the ERP program’s safety standards. </p5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        
    );
}