import React from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Node js",
    },
    {
      name: "Python",
    },
    {
      name: "Javascript",
    },
    {
      name: "R",
    },
    {
      name: "C",
    },
    {
      name: "Django",
    },
    {
      name: "Flask",
    },
    {
      name: "Docker",
    },
    {
      name: "Shell",
    },
    {
      name: "Tensorflow",
    },
    {
      name: "Scikit-learn",
    },
    {
      name: "React",
    },
    {
      name: "Git",
    },
    {
      name: "Ubuntu",
    },
    {
      name: "Boostrap",
    },
    {
      name: "Postgresql",
    },
  ];

  const colors = [
    "#F63106",
    "#1ABC9C",
    "#F7DC6F",
    "#21618C ",
    "#B03A2E",
    "#F1C40F",
    "#5DADE2",
    "#7B7D7D",
    "#7D3C98",
    "#E3CD0C",
    "#E73CC0 ",
    "#ED11BB",
    "#050004",
    "#E5262C",
    "#9A8384",
    "#1DE6C1",
    "#64AC9F",
    "#2E2D91",
  ];
  return (
    <div className="container techstack-section">
      <div className="section-title">
        <h5> TechStack </h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="tech-content">
              <span className="tech-number" style={{backgroundColor: colors[index]}}>
                {index+1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
