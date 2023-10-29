import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="logo" />
                    <span className='secondaryText'>Our vision is to make all people
                        <br />
                        the best place to live for them.</span>
                </div>
                {/* right */}
                <div className="flexColStart f-right">
                    <span className='primaryText'>information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                    <div className="flexCenter f-menu ">
                        <a href="">Property</a>
                        <a href="">Services</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer