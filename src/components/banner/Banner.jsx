"use client";
import React from "react";
import shape4 from "@/assets/img/shape/4.png";
import shape7 from "@/assets/img/shape/7.png";
import shape72 from "@/assets/img/shape/72.png";
import Image from "next/image";
import Link from "next/link";
import stand from "@/assets/img/illustration/stand2.png";
import SocialShare from "../utilities/SocialShare";
import Fader from "./Fader";

const Banner = () => {
  const textLines = [
    '<b className="">Web Developer</b>',
    '<b className="">Data Analyst</b>',
    '<b className="">Content Editor</b>',
    '<b className="">IOT Engineer</b>',
  ];

  return (
    <>
      <div className="auto-height bg-fixed banner-style-one section" id="home">
        <div className="container">
          <div className="double-items">
            <div className="row align-center">
              <div className="col-lg-6 info">
                <h1 className="text-invisible moving-animation-title">DEVELOPER</h1>
                <h2>
                  Strategic <Image className="hand" src={shape4} alt="Icon" /> Solutions
                </h2>
                <h3 className="title">
                  <span className="header-caption" id="page-top">
                    <Fader />
                   
                  </span>
                </h3>
                <div className="button mt-55">
                  <Link className="btn btn-md circle btn-dark" target="_blank" href="https://docs.google.com/document/d/16Cp_Q5bbbjoZqqiHHOPIa31t2y3S4b2StQtIFcnjrFY/edit?usp=sharing">
                    My Resume
                  </Link>
                </div>
              </div>
              <div  className="col-lg-6 thumb" height="2000px" data-wow-delay="900ms">
                <Image  className="wow fadeIn" src={stand} alt="Thumb" />
{/* 
                <div className="shape-center3">
                  <Image className="smoke3" src={shape7} alt="smoke3" />
                </div>
                <div className="shape-center2">
                  <Image className="smoke2" src={shape7} alt="smoke2" />
                </div>
                <div className="shape-center">
                  <Image className="smoke" src={shape7} alt="smoke" />
                </div>
                <div className="shape-center6">
                                <Image className="smoke" src={shape72} alt="smoke3" />
                                </div>
                                <div className="shape-center5">
                                <Image className="smoke2" src={shape72} alt="smoke3" />
                                </div>
                                <div className="shape-center4">
                                <Image className="smoke3" src={shape72} alt="smoke3" />
                                </div> */}
              </div>
            </div>
            <div className="personal-social">
              <ul>
                <SocialShare />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
