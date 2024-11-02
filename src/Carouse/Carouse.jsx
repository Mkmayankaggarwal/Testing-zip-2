import React, { useEffect } from "react";
import "./Carouse.css"


const Carouse = () => {
  useEffect(() => {
    // Initialize Owl Carousel once the component is mounted
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true, // Enable dots
      nav: false, // Disable navigation
    });
  }, []);
  return (
    <>
    <div className="client-says">
      <div className="widget grey-bg px-3 py-3">
        <h2>What Our Clients Say</h2>
          <div className="owl-carousel no-pb" data-items="1" data-dots="false" data-autoplay="true">
          <div className="item">
            <div className="testimonial m-0">
              <div className="testimonial-content"> 
                <span><i className="fas fa-quote-left"></i></span>
                <p>Averco products are great in performance, durability, and their services are very responsive and quick. We are happy to recommend them to other buyers.</p>
                <div className="testimonial-caption">
                  <h6>Dr. Sujeet Singh, Director</h6>
                  <label>Aasha Hospital, Allahabad</label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial m-0">
              <div className="testimonial-content"> 
                <span><i className="fas fa-quote-left"></i></span>
                <p>Averco products and team both are reliable, we know them from long back and appreciate their product quality, subject expertise & service support to their users. Happy to recommend them.</p>
                <div className="testimonial-caption">
                  <h6>Dr. BS Chauhan, Agra</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial m-0">
              <div className="testimonial-content"> 
                <span><i className="fas fa-quote-left"></i></span>
                <p>Great team with great vision, we have full faith and trust in performance, durability, and services offered by Averco team. Highly reliable & recommendable.</p>
                <div className="testimonial-caption">
                  <h6>Dr. O. N. Pandey, Director</h6>
                  <label>SCPM Super Specialty Hospital & Research Centre</label>
                  <label>SCPM Medical & Nursing College, Gonda</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

    </>
  )
}

export default Carouse;
