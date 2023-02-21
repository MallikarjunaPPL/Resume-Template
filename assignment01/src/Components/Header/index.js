import React from 'react';
import "./index.css";
import logo from "../../Images/resume-logo-2.jpg";
const index = () => {
    return (
        <div id="Header" className='head_cont'>
           
            <div className='header'>
                <h1 className='heading_main'>Resume Template</h1>
                <img src={logo} className="img_sty" alt="Wrong_Url"/>
            </div>
        </div>
    );
};

export default index;