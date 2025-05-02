import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePortfolio = ({ portfolio }) => {
  const { id, title, thumb, subTitle, arrowIcon, link } = portfolio;
  if (subTitle.includes("Dashboard") || subTitle.includes("Hardware")) {
    return (
      <>
        <Link href={`/portfolios/portfolio-single/${id}`}>
          <span className="pf-item">
            <span className="overlay-content">
              <Image
                src={`/assets/img/portfolio/${thumb}`}
                alt="thumb"
                width={510}
                height={230}
              />
              <span className="content">
                <span className="title">
                  <span>{subTitle}</span>
                  <h5>{title}</h5>
                </span>
                <i className={arrowIcon}></i>
              </span>
            </span>
          </span>
        </Link>
      </>
    );
  }  else {
    return (
      <Link href={link} target="_blank" rel="noopener">
        <span className="pf-item">
          <span className="overlay-content">
            <Image
              src={`/assets/img/portfolio/${thumb}`}
              alt="thumb"
              width={510}
              height={230}
            />
            <span className="content">
              <span className="title">
                <span>{subTitle}</span>
                <h5>{title}</h5>
              </span>
              <i className={arrowIcon}></i>
            </span>
          </span>
        </span>
      </Link>
    );
  }
};

export default SinglePortfolio;
