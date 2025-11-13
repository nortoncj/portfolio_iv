"use client";
import React from "react";
import { useParams } from "next/navigation";
import thumb1 from "@/assets/img/thumb/1.jpg";
import thumb2 from "@/assets/img/thumb/2.jpg";
import Image from "next/image";
import SocialShareStyle2 from "../utilities/SocialShareStyle2";
import SocialShareStyle3 from "../utilities/SocialShareStyle3";
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json";

const PortfolioSingleContent = () => {
  const params = useParams();
  const id = params.id - 1;
  const project = PortfolioData[id];

  return (
    <>
      <div className="project-details-area default-padding">
        <div className="container">
          <div className="project-details-items">
            <div className="project-thumb">
              {(project.video && (
                <iframe
                  className="w-[80%] self-center mx-auto aspect-video z-60"
                  src="https://www.youtube-nocookie.com/embed/22F9guwtIQA"
                  title="Embedded video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 0 }}
                  width={100}
                  height={100}
                ></iframe>
              )) || (
                <Image
                  className=" thumb-video align-self-center mx-auto "
                  height={100}
                  width={100}
                  src={
                    `/assets/img/portfolio/${project.thumb}` ||
                    "/assets/img/banner/2.jpg"
                  }
                  alt="Thumb"
                />
              )}
            </div>
            <div className="top-info">
              <div className="row">
                <div className="col-xl-12 left-info">
                  <div className="project-info mt-md-50 mt-xs-40 mb-40">
                    <div className="content">
                      <ul className="project-basic-info">
                        <li>
                          Client <span>{project.title}</span>
                        </li>
                        <li>
                          Project Type <span>{project.subTitle}</span>
                        </li>
                        <li>
                          Date <span>{project.date}</span>
                        </li>
                        <li>
                          Location <span>{project.location}</span>
                        </li>
                      </ul>
                      <ul className="social project-links">
                        <ul>
                          <li>
                            <h4>Links:</h4>
                          </li>

                          <SocialShareStyle3
                            link={project.link}
                            git={project.git}
                          />
                        </ul>
                        <ul>
                          <li>
                            <h4>Share:</h4>
                          </li>
                          <SocialShareStyle2 />
                        </ul>
                      </ul>
                    </div>
                  </div>
                  <h2>Overview</h2>
                  <p>{project.description || "description"}</p>
                  <ul className="check-list mt-40">
                    {project.username && (
                      <li>
                        <h4>Login</h4>
                        <p>{project?.username || null}</p>
                        <p>{project?.password || null}</p>
                      </li>
                    )}
                    {project.challenges && (
                      <li>
                        <h4>Challenges</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.challenges &&
                          Array.isArray(project.challenges) &&
                          project.challenges.length > 0 ? (
                            project.challenges.map((challenge, index) => (
                              <ul key={index} className="mb-2">
                                <li className="list-disc ml-5">{challenge}</li>
                              </ul>
                            ))
                          ) : (
                            <p>No challenges</p>
                          )}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="main-content mt-40">
              <p>{project.notes || null}</p>
              <div className="row">
                {project.thumb1 && (
                  <div className="col-lg-6 col-md-6">
                    <Image
                      height={100}
                      width={400}
                      src={`/assets/img/thumb/${project?.thumb1}` || thumb1}
                      alt="Thumb"
                    />
                  </div>
                )}
                {project.thumb2 && (
                  <div className="col-lg-6 col-md-6">
                    <Image
                      height={100}
                      width={400}
                      src={`/assets/img/thumb/${project?.thumb2}` || thumb2}
                      alt="Thumb"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSingleContent;
