"use client";
import React from "react";
import { useParams } from "next/navigation";
import FaqData from "@/assets/jsonData/faq/FaqData.json";
import SkillsData from "@/assets/jsonData/skills/SkillsData.json";
import SingleFaq1 from "../faq/SingleFaq1";
import Link from "next/link";
import Image from "next/image";

const ServiceSingleContent = () => {
  const params = useParams();
  const id = params.id - 1;
  const skills = SkillsData[id];

  return (
    <>
      <div className="services-single-content">
        <div className="thumb">
          <Image
            src={skills.thumb || "/assets/img/banner/5.jpg"}
            alt="Thumb"
            width={1032}
            height={585}
          />
        </div>
        <h2>{skills.title}</h2>
        <p>{skills.text}</p>
        <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="content">
                
                {skills.skills && (
                    <>
                    <h4>Skills</h4>
                  <ul className="feature-list-item">
                    {Object.values(skills.skills).map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-8 col-md-6 mt-xs-30">
              <div className="content">
                {skills.challenges && (
                    <>
                <h4>Challenges</h4>
                <p>{skills.challenges}</p>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
        {skills.why && (
            <>
            <h4>Why choose me?</h4>
        <p>{skills.why}</p>
            </>
        )}        
        <div className="faq-style-one mt-40">
          <h3 className="mb-25">Common Questions</h3>
          <div className="accordion" id="faqAccordion">
            {FaqData.map((faq) => (
              <SingleFaq1 faq={faq} key={faq.id} />
            ))}
          </div>
        </div>
        {}
        <div className="services-more mt-50">
          <h3>Emphasis Skills</h3>
          <div className="row">
            <div className="col-md-6">
              <Link href="#" scroll={false}> 
              {skills.showSkills1 && (       
              <div className="item">
                <i className="flaticon-development"></i>
               
                <h4>
                  {skills.showSkills1.title}
                  
                </h4>
                
                <p>
                {skills.showSkills1.text}
                </p>
              </div>)}
              </Link>
            </div>
            <div className="col-md-6">
            {skills.showSkills2 && (       
              <div className="item">
                <i className="flaticon-layers"></i>
               
                <h4>
                  {skills.showSkills2.title}
                  
                </h4>
                
                <p>
                {skills.showSkills2.text}
                </p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSingleContent;
