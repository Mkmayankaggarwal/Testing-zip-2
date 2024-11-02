// Home.jsx

import React, { useEffect } from "react";
import slide1 from '../images/bg/slide1.jpg';
import slide5 from '../images/bg/slide5.jpg';
import slide4 from '../images/bg/slide4.jpg';
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    const $ = window.$; // Ensure jQuery is available
    $('.banner-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: [
        "<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>",
        "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"
      ],
    });
  }, []);

  return (
    <div className="page-wrapper">
      <section className="fullscreen-banner1 p-0 overflow-hidden">
        <div className="banner-slider owl-carousel no-pb">
          <div className="item1" style={{ backgroundImage: `url(${slide1})` }}>
            <div className="align-center pt-0">
              <div className="container">
                <div className="row2">
                  <div className="col-lg-8 col-md-12 me-auto">
                    <h1 className="text-black mb-3 animated8">
                      <span>You can rely on Averco Products solution at most challenging situations</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item1" style={{ backgroundImage: `url(${slide5})` }}>
            <div className="align-center pt-0">
              <div className="container">
                <div className="row2">
                  <div className="col-lg-8 col-md-12 me-auto">
                    <h1 className="text-black mb-3 animated8">
                      <span>Your trust in us is our strength and motivation to excel in our work</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item1" style={{ backgroundImage: `url(${slide4})` }}>
            <div className="align-center pt-0">
              <div className="container">
                <div className="row2">
                  <div className="col-lg-8 col-md-12 me-auto">
                    <h1 className="text-black mb-3 animated8">
                      <span>Our cross-functional team works hard to make greater products</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
