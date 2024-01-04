import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/about.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr  className="w-50"/>
              <p className="lead mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover  humour and the like.
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
              <NavLink to='/contact' className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
