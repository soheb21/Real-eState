import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from "react-countup"
import "./Hero.css"
import { motion } from "framer-motion"
const Hero = () => {
    return (
        <>
            <section className='hero-wrapper'>
                <div className="paddings innerWidth flexCenter hero-container">
                    {/* left */}
                    <div className="flexColStart hero-left ">
                        <div className="hero-title">
                            <div className="orange-circle" />
                            <motion.h1
                                initial={{ y: "2rem", opacity: 0 }}
                                animate={{ y: "0", opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    type: "spring"

                                }}
                            >
                                Discover <br />  Most Suitable <br /> Property
                            </motion.h1>


                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>find a varity of Properties that suit you very easily
                                <br /> forget all dificulties in finding  a residence for you</span>
                        </div>
                        <div className="flexCenter hero-search">
                            <HiLocationMarker color="var(--blue)" />
                            <input type="search" />
                            <button className='button'>search</button>
                        </div>
                        <div className="flexCenter stats">
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={8000} end={9000} duration={3} />
                                    <span>+</span>
                                </span><span className='number-title' >Happy customer</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={1000} end={2000} duration={3} />
                                    <span>+</span>
                                </span><span className='number-title' >Premium Products</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={0} end={28} duration={3} />
                                    <span>+</span>
                                </span><span className='number-title' >Awardsr</span>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="flexCenter hero-right">
                        <motion.div className="image-container"
                            initial={{ y: "7rem", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "tween"

                            }}
                        >
                            <img src="./hero-image.png" alt="hero" />
                        </motion.div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero