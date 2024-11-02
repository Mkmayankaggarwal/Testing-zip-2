import React from 'react';
import { Link } from 'react-router-dom';
import Carouse from './Carouse/Carouse';

const Vision = () => {
  return (
    <>
      <section className="page-title overflow-hidden grey-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="title mb-0">Our <span>Vision</span></h1>
            </div>
            <div className="col-lg-6 col-md-12 text-lg-end mt-3 mt-lg-0">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home"></i></Link></li>
                  <li className="breadcrumb active" aria-current="page">Home</li>
                  <li className="breadcrumb"><Link to="/vision">Vision & Mission</Link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="left-side">
                <div>
                  <div className="service-details">
                    <h2 className="title">Vision</h2>
                    <p className="lead">“Our vision is to become the most trusted & reliable company in our segment”</p>
                    
                    <h2 className="title">Mission</h2>
                    <p>“Serving the best products and services”</p>
                    
                    <h2 className="title">Values</h2>
                    <p>“Integrity, honesty & dedication”</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
              <div className="widget mb-5">
                <div className="sidebar-links">
                  <ul className="list-unstyled">
                    <li><Link to="/about"><i className="fas fa-angle-right"></i> About Averco</Link></li>
                    <li className="active"><Link to="/vision"><i className="fas fa-angle-right"></i> Vision & Mission</Link></li>
                    <li><Link to="/products"><i className="fas fa-angle-right"></i> Products</Link></li>
                    <li><Link to="/support"><i className="fas fa-angle-right"></i> Support</Link></li>
                    <li><Link to="/career"><i className="fas fa-angle-right"></i> Career</Link></li>
                    <li><Link to="/contact"><i className="fas fa-angle-right"></i> Contact Us</Link></li>
                  </ul>
                </div>
              </div>

              <div className="widget">
                <h5 className="widget-title">Follow Us</h5>
                <div className="social-icons social-colored">
                  <ul className="list-inline mb-0">
                    <li className="social-facebook"><Link to="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link></li>
                    <li className="social-twitter"><Link to="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link></li>
                    <li className="social-gplus"><Link to="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></Link></li>
                    <li className="social-linkedin"><Link to="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link></li>
                  </ul>
                </div>
              </div>
              <br />
              <Carouse/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
