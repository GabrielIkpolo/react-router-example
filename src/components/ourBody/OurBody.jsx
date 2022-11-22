import React from 'react'
import './ourBody.css';
import myImage from '../../images/myP.png';
import Footer from '../footer/Footer';

function OurBody() {
    return (
        <>
            <div className='ourBody'>
                <div className="imageCover">
                    <img src={myImage} className="image" alt="the profile Pic" />
                </div>

                <div className='nameTitle'>
                    <h3>Gabriel Ikpolo</h3>
                    <span className='designation'>Chief Technical Director, Software Development</span>
                    <button className='email'>Email</button>
                    <button className='linkedIn'>LinkedIn</button>
                </div>

                <Footer />
            </div>
        </>

    )
}

export default OurBody