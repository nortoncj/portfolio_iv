import React from 'react';
import illustration3 from "@/assets/img/illustration/stand.png"
import Image from 'next/image';
import AboutData from "@/assets/jsonData/about/AboutData.json"
import SingleAboutSkill from './SingleAboutSkill';

const About = () => {
    return (
        <>
            <div id="about" className="about-style-six-area default-padding-top section">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-six col-lg-5">
                            <div className="thumb">
                                <Image
                            //      style={{ 
                            //     WebkitMaskImage: "linear-gradient(#000, rgba(0,0,0,0.2))", 
                            //     maskImage: "linear-gradient(#000, rgba(0,0,0,0.2))"
                            // }} 
                             className="wow fadeInUp" src={illustration3} alt="Thumb" />
                            </div>
                        </div>
                        <div className="about-style-six col-lg-6 offset-lg-1">
                            <h4 className="sub-title">About Me</h4>
                            <h2 className="title">I build exceptional digital experiences with tailored <br /> web solutions</h2>
                            <p>
                            I’m a digital strategist who transforms data into engaging experiences. With expertise in web development, email automation, content strategy, and data analysis, I create strategic impactful online solutions.
                            </p>
                            <p>
                                My interests in data science started in my content creation journey. I use track trends and other KPI&apos;s to improve my content as well as finding new ways to build a personal brand like email.
                            </p>
                            <p>
                                When I&apos;m not coding, I&apos;m spending time with my family. I also enjoy outdoor activities like my outdoor fitness training, flying drones and karaeoke. 
                            </p>
                            <p>

                            </p>
                            {/* <div className="skill-list">
                                <ul>
                                    {AboutData.map(skill =>
                                        <SingleAboutSkill skill={skill} key={skill.id} />
                                    )}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;