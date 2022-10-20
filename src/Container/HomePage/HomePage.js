import React from "react";
import "./HomePage.css";
// import Link from "react-router";
import NavBar from "./../../Components/NavBar/NavBar";
// import Footer from "../../Components/Footer/Footer";
import SkFooter from "./../../Components/SkFooter/SkFooter";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex-container-for-the-tech-o-neers-screen-header">
        {/* width  set for the screen */}
        <div className="bgc-for-the-main-header-screen-image">
          <div className="width-set-for-the-tech-o-neers-screen-header">
            <div className="container-for-the-content-on-the-image">
              <h1 className="header-for-the-img-section">
                Create a Cohesive Network to Drive a Seamless Business Function
              </h1>
              <p className="info-for-the-img-section-after-header">
                We are one stop shop solution for all your office essentials
              </p>
              {/* <Link to="/contact-us/"> */}
              <button className="btn-for-discover-more-header-section">
                Contact Us
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <Footer /> */}
      <SkFooter />
    </>
  );
};

export default HomePage;
