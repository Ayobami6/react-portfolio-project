import React from "react";
import "./About.css";
import profilepic from "../../Image/pp.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-img">
            <img src={profilepic} alt="profile pic" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5> About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Some Dummy text for now do to this later gghggghghgasgggsa
              jhghjjhhjhhhkjhkhhh jgjagggggajhkahkhhkhas bbjhkahkhhkhhakhkahhkhk
              y, if you want to gain a deeper understanding of Vim-Plug, the
              project’s Github page is an excellent place to start. Links for
              all these websites are provided in the External Resources section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
