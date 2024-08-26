"use client"
import React from 'react';
import Icon from '@/assets/img/favicon.png';
import logo from '@/assets/img/logo-dark.png';
import Image from 'next/image';
import PopupVideo from '../video/PopupVideo';
import { Link } from 'react-scroll';

const HeaderStyle1 = () => {
    return (
        <>
            <header className="header-fixed">
            <link rel="icon" href={Icon} type="image/x-icon" />
                <div className="f-flex">
                    <div className="logo">
                        <Link to="home" spy={true}><Image src={Icon} alt="Logo" /></Link>
                    </div>
                    <div className="menu">
                        <ul className="nav">
                            <li>
                                <Link className="smooth-menu" to="home" spy={true}>
                                    <i className="fas fa-home"></i>
                                    <div className="menu-name">Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" to="services" spy={true}>
                                    <i className="fas fa-cog"></i>
                                    <div className="menu-name">Services</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" to="portfolio" spy={true}>
                                    <i className="fas fa-briefcase"></i>
                                    <div className="menu-name">Portfolio</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" to="about" spy={true}>
                                    <i className="fas fa-user"></i>
                                    <div className="menu-name">About</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" to="resume" spy={true}>
                                    <i className="fas fa-file-alt"></i>
                                    <div className="menu-name">Resume</div>
                                </Link>
                            </li>
                            <li>
                                {/* <Link className="smooth-menu" to="contact" spy={true}>
                                    <i className="fas fa-comments"></i>
                                    <div className="menu-name">Contact</div>
                                </Link> */}
                            </li>
                        </ul>
                    </div>
                    <div className="video">
                        <PopupVideo videoClass="popup-youtube video-play-button theme" videoId="5qRsGTuy3Rs">
                            <i className="fas fa-play"></i>
                        </PopupVideo>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderStyle1;