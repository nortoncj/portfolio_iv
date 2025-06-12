import React from "react";
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json";
import DashboardData from "@/assets/jsonData/portfolio/PortfolioDashboardData.json"
import EmailData from "@/assets/jsonData/portfolio/PortfolioEmailData.json"
import WebsiteData from "@/assets/jsonData/portfolio/PortfolioWebsiteData.json"
import SinglePortfolio from "./SinglePortfolio";
import Image from "next/image";
import FactData from "@/assets/jsonData/fact/FactData.json";
import SingleFact from "../fact/SingleFact";
import shape1 from "@/assets/img/shape/1.webp";
import shape10 from "@/assets/img/shape/10.png";

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="portfolio-style-six-area default-padding-top section"
      >
        <div className="shape-animated-right">
          <Image src={shape1} alt="Shape" />
        </div>
        <div className="container">
          <div className="heading-left">
            <div className="row align-center">
              <div className="col-lg-5">
                <div className="left-info">
                  <h5 className="sub-title">Recent Work</h5>
                  <h2 className="title">
                    Look at my portfolio and <br /> give me your feedback
                  </h2>
                  <div className="heading-shape">
                    <Image src={shape10} alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="right-info">
                  {/* <div className="fun-factor-default">
                                        {FactData.map(data =>
                                            <SingleFact data={data} key={data.id} />
                                        )}
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className=" nav-tabs text-center portfolio-tab-navs"
              id="portfolio-nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-id-1"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
                type="button"
                role="tab"
                aria-controls="tab-1"
                aria-selected="false"
              >
                All
              </button>
              <button
                className="nav-link"
                id="nav-id-2"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
                type="button"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
              >
                Dashboards
              </button>
              <button
                    className="nav-link "
                    id="nav-id-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                    type="button"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                  >
                    Emails 
                  </button>
                  <button
                    className="nav-link "
                    id="nav-id-4"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                    type="button"
                    role="tab"
                    aria-controls="tab-4"
                    aria-selected="true"
                  >
                    Websites
                  </button>
            </div>
            <div className="col-md-12 gallery-content mt-2 mb--15">
              <div className="magnific-mix-gallery masonary">
                <div id="portfolio-grid" className="gallery-items colums-3">
                <div className="tab-content resume-tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="nav-id-1">
                        
                    
                  {PortfolioData.map((portfolio) => (
                    <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
                  ))}
                  </div>

                  <div className="tab-pane fade " id="tab-2" role="tabpanel" aria-labelledby="nav-id-2">
                        {DashboardData.map((portfolio) => (
                    <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
                  ))}
                  </div>

                  <div className="tab-pane fade " id="tab-3" role="tabpanel" aria-labelledby="nav-id-3">
                        {EmailData.map((portfolio) => (
                    <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
                  ))}
                  </div>

                  <div className="tab-pane fade " id="tab-4" role="tabpanel" aria-labelledby="nav-id-4">
                        {WebsiteData.map((portfolio) => (
                    <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
                  ))}
                  </div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
