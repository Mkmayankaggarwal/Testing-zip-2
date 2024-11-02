import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BannerCarousel() {
  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <OwlCarousel className="banner-carousel owl-theme" {...carouselOptions}>
      <div className="item"><img src="images/bg/slide1.jpg" alt="Slide 1" /></div>
      <div className="item"><img src="images/bg/slide4.jpg" alt="Slide 2" /></div>
      <div className="item"><img src="images/bg/slide5.jpg" alt="Slide 3" /></div>
    </OwlCarousel>
  );
}

export default BannerCarousel;
