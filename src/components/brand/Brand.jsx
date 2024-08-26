"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import logo1 from '@/assets/img/logo/1.png'
import logo2 from '@/assets/img/logo/2.png'
import logo3 from '@/assets/img/logo/3.png'
import logo4 from '@/assets/img/logo/4.png'
import logo5 from '@/assets/img/logo/5.png'

const BrandData = [
    {
        id: 1,
        thumb: logo1
    },
    {
        id: 2,
        thumb: logo2
    },
    {
        id: 3,
        thumb: logo4
    },
    {
        id: 4,
        thumb: logo5
    },
    {
        id: 5,
        thumb: logo3
    },
    {
        id: 6,
        thumb: logo1
    },
    {
        id: 7,
        thumb: logo2
    },
    {
        id: 8,
        thumb: logo4
    },
    {
        id: 9,
        thumb: logo5
    },
    {
        id: 10,
        thumb: logo3
    }
]

const Brand = () => {
    return (
        <>
            <div className="brand-style-one-area text-center default-padding-top">
                <div className="container">
                    <div className="brand-style-one">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand5col">
                                    <Swiper
                                        modules={[Keyboard, Autoplay]}
                                        autoplay={false}
                                        slidesPerView={2}
                                        loop={true}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            992: {
                                                slidesPerView: 4,
                                                spaceBetween: 60,
                                            },
                                            1199: {
                                                slidesPerView: 5,
                                                spaceBetween: 60,
                                            }
                                        }}
                                    >
                                        <div className="swiper-wrapper align-center">
                                            {BrandData.map(brand =>
                                                <SwiperSlide key={brand.id}>
                                                    <Image src={brand.thumb} alt="Thumb" />
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

export default Brand;