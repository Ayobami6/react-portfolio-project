import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Cv from "./Ayobami_Alaran_Resume_14-01-2023-19-49-23.pdf"


function Home() {
  return (
  <div className="container-fluid home">

      <div className="container home-content">
          <h1>
          Hi 👋 I'm a 
        </h1>
        <h2>
            <Typewriter
              options={{
                strings: ['Data Analyst', 'Backend Developer',
              'Junior Data Scientist', 
              'Full Stack Software Developer'],
                autoStart: true,
                loop: true,
                delay: 5
              }}
            />
        </h2>

          <div className="btn-for-action">

            <h3 className="hire-me-btn">
              Hire Me 
            </h3>
            <h4 className="get-resume-btn">
              <a href={Cv} download="Ayobami_cv.pdf">Get Resume</a>
            </h4> 
          </div>
      </div>

    </div>
  );
}

export default Home;
