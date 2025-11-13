import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Brand from "@/components/brand/Brand";
import ChatAI from "@/components/chat/ChatAI";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HeaderMobile from "@/components/header/HeaderMobile";
import HeaderStyle1 from "@/components/header/HeaderStyle1";
import MainMenu from "@/components/header/MainMenu";
import Portfolio from "@/components/portfolio/Portfolio";
import Price from "@/components/price/Price";
import Resume from "@/components/resume/Resume";
import Resume2 from "@/components/resume/Resume2";
import ServicesStyle1 from "@/components/services/ServicesStyle1";

import Testimonial from "@/components/testimonial/Testimonial";
import Work from "@/components/work/Work";
import React from "react";

export const metadata = {
  title: "Chris Norton | Web Developer",
  description: "Web Developer | Data Analyst Portfolio",
};

const Home = () => {
  return (
    <>
      <HeaderMobile />
      {/* <HeaderStyle1 /> */}
      <MainMenu />
      <Banner />
      <Resume2 />

      <About />
      <Portfolio />

      {/* <Resume /> */}
      {/* <Price /> */}
      {/* <Brand /> */}
      {/* <Testimonial /> */}
      {/* <Work /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
