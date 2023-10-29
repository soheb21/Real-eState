import React from 'react'
import { HiChat } from 'react-icons/hi'
import { MdCall, MdMail, MdVideoCall } from 'react-icons/md'
import "./Contact.css"

const Contact = () => {
    return (
        <section className='c-wrapper'>
            <div className="paddings innerWidth flexCenter c-container">
                <div className="co-left flexColStart">
                    <span className='orangeText' >Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a <br /> good blace to live can make your life better</span>

                    <div className="flexColStart contactMode">
                        <div className="flexStart row">
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={20} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>

                            </div>

                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChat size={20}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>

                            </div>

                          

                        </div>
                          {/* seconde row */}
                          <div className="flexStart row">
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdVideoCall size={20}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video call Now</div>

                            </div>

                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                       <MdMail size={20}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Mail</span>
                                        <span className='secondaryText'>example@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Mail Now</div>

                            </div>

                        </div>
                        

                          
                           
                    </div>
                </div>
                <div className="co-right">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact