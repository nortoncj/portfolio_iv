"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import TestimonialData from '@/assets/jsonData/testimonial/TestimonialData.json'
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
    return (
        <>
            <div className="testimonial-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">My Expertise</h4>
                                <h2 className="title">Customers feedback</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="testimonial-style-one-box text-center">
                        <div className="row align-center">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="testimonial-style-one-carousel">
                                    <Swiper
                                        modules={[Keyboard, Autoplay]}
                                        autoplay={false}
                                        slidesPerView={1}
                                        loop={true}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                    >
                                        <div className="swiper-wrapper">
                                            {TestimonialData.map(testimonial =>
                                                <SwiperSlide key={testimonial.id}>
                                                    <SingleTestimonial testimonial={testimonial} />
                                                </SwiperSlide>
                                            )}
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;