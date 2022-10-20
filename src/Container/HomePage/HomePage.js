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
      <div className="flex-container-for-the-sk-fitness-home-screen">
        <div className="width-set-for-the-screen-after-heading-section-sk-fitness">
          {/* Testimonials */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide relative carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full text-center">
                <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  voluptas nostrum quisquam!"
                </p>
                <div className="mt-12 mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    className="rounded-full w-24 h-24 shadow-lg"
                    alt="smaple image"
                  />
                </div>
                <p className="text-gray-500">- Anna Morian</p>
              </div>
              <div className="carousel-item relative float-left w-full text-center">
                <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                  "Neque cupiditate assumenda in maiores repudiandae mollitia
                  adipisci maiores repudiandae mollitia consectetur adipisicing
                  architecto elit sed adipiscing elit."
                </p>
                <div className="mt-12 mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    className="rounded-full w-24 h-24 shadow-lg"
                    alt="smaple image"
                  />
                </div>
                <p className="text-gray-500">- Teresa May</p>
              </div>
              <div className="carousel-item relative float-left w-full text-center">
                <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur est laborum neque
                  cupiditate assumenda in maiores."
                </p>
                <div className="mt-12 mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    className="rounded-full w-24 h-24 shadow-lg"
                    alt="smaple image"
                  />
                </div>
                <p className="text-gray-500">- Kate Allise</p>
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <SkFooter />
    </>
  );
};

export default HomePage;
