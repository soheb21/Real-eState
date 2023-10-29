import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residencies.css"
import "swiper/css"
import data from "../../utils/slider.json"
import { sliderSetting } from '../../utils/common';
const Residencies = () => {
    return (
        <section className='r-wrapper'>
            <div className="paddings innerWidth  r-container">
                <div className="r-head flexColStart ">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText' >Popular Residencies</span>
                </div>
               

                <Swiper {...sliderSetting} >
                <SliderButton />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i} >
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="images" />
                                    <span className='secondaryText r-price'>
                                        <span className='orangeText'>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>

                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>

            </div>
        </section>
    )
}

export default Residencies

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexEnd r-button">
            <button onClick={() => swiper.slidePrev()} className='primaryText'>&lt;</button>
            <button onClick={() => swiper.slideNext()} className="primaryText">&gt;</button>
        </div>
    )
}