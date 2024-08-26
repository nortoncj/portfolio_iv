"use client";
import React, { useEffect, useRef, useState } from "react";

const SingleSkill = ({ skill }) => {
  const { title, icon, end } = skill;

  return (
    <>
       <li className="col-lg-3 col-md-6 mb-4">
      <div className="row align-items-center">
        <div className="col-3">
          <div className="icon">
            <i className={icon}></i>
          </div>
        </div>
        <div className="col-9">
          <h4>{title}</h4>
        </div>
      </div>
    </li>
    </>
  );
};

export default SingleSkill;
