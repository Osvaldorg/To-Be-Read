import React from "react";
import "./About.css";
import aboutImg from "../../images/about-Img.jpg";

function About() {
  return (
    <section>
      <div className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="about-content grid">
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-text">
              <h2 className="about-title fs-26 ls=1">About To Be Read</h2>
              <p className="fs-17">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                doloribus assumenda commodi amet obcaecati non voluptas ut
                recusandae placeat, aut repudiandae voluptates quod ex
                accusantium? Quos mollitia recusandae iste nostrum!
              </p>
              <p className="fs-17">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                facilis odio nisi provident obcaecati a veritatis excepturi,
                error eum ducimus hic illum fugiat asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
