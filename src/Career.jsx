import React from 'react';
import { Link } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carouse from './Carouse/Carouse';
import Home from "./Home";

function Career() {
  const carouselOptions = {
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
  };

  return (
    <>
      <section className="page-title overflow-hidden grey-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="title mb-0">Career <span>With Us</span></h1>
            </div>
            <div className="col-lg-6 col-md-12 text-lg-end mt-3 mt-lg-0">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/Home">
                        <i className="fas fa-home"></i>
                      </Link>
                    </li>
                    <li className="breadcrumb active" aria-current="page">
                      Home
                    </li>
                    <li className="breadcrumb">
                      <Link to="/Career">Careers</Link>
                    </li>
                  </ol>
                </nav>
              </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="left-side">
                  <div className="service-details">
                    <h2 className="title">Career with <span>Averco Global</span></h2>
                    <p className="lead">
                      Averco welcomes talented young minds who believe in hard work, passion, and have vision for their career, country, and society. We believe in equal opportunity for everyone and try our best to offer the safest, happiest, and most innovative place to work. If you are a sales professional, service engineer, R&D, product development or application specialist in the field of medical engineering/electronics, kindly drop your CV at <a href="mailto:info@averco.com">info@averco.com</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
                <div className="widget mb-5">
                  <div className="sidebar-links">
                    <ul className="list-unstyled">
                      <li><Link to="/about"><i className="fas fa-angle-right"></i> About Averco</Link></li>
                      <li><Link to="/vision"><i className="fas fa-angle-right"></i> Vision & Mission</Link></li>
                      <li><Link to="/products"><i className="fas fa-angle-right"></i> Products</Link></li>
                      <li><Link to="/support"><i className="fas fa-angle-right"></i> Support</Link></li>
                      <li className="active"><Link to="/career"><i className="fas fa-angle-right"></i> Career</Link></li>
                      <li><Link to="/contact"><i className="fas fa-angle-right"></i> Contact Us</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="widget">
                  <h5 className="widget-title">Follow Us</h5>
                  <div className="social-icons social-colored">
                    <ul className="list-inline mb-0">
                      <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                      <li className="social-twitter"><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                      <li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                      <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
                <Carouse/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Career;
