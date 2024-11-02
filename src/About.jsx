import React from 'react';
import { Link } from 'react-router-dom';
import Carouse from './Carouse/Carouse';

function About() {
  return (
    <div>
      <div className="page-wrapper">
        <section className="page-title overflow-hidden grey-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <h1 className="title mb-0">About <span>Us</span></h1>
              </div>
              <div className="col-lg-6 col-md-12 text-lg-end mt-3 mt-lg-0">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/"><i className="fas fa-home"></i></Link>
                    </li>
                    <li className="breadcrumb active" aria-current="page">Home</li>
                    <li className="breadcrumb">
                      <Link to="/about">About Us</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* Page Content */}
        <div className="page-content">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="left-side">
                    <div className="service-details">
                      <h2 className="title">Greetings & Welcome to <span>Averco</span></h2>
                      <p className="lead">
                        We are a young startup company, serious in what we are doing. We are young, professional, we aim high and we aim global. 
                        <b>For us “AVERCO” means <span style={{ color: '#f74a2d' }}>a </span> Uni
                        <span style={{ color: '#f74a2d' }}>ver</span>sal <span style={{ color: '#f74a2d' }}>Co</span>mpany.</b><br />
                        We are inspired by the “Make in India” initiative, having more than twenty years of experience in the medical devices industry at senior management positions. 
                        With our extensive experience and subject knowledge, we understand the gaps in the current market and try to address those challenges with our innovative solutions. 
                        At the core, we value Quality, Commitment, Customer Service, and Cost.<br />
                        Initially, we are launching a few products, aiming to provide a complete solution for each vertical we serve. 
                        We carry the responsibility of meeting clients' trust and expectations, serving them at our best.<br />
                        Our mission is to serve humanity with quality products at affordable costs, without compromising quality and product service. 
                        We also contribute to social and environmental concerns.<br />
                        Thanks for your unwavering support and trust in us!<br />
                        Team Averco<br />
                        <span style={{ color: '#f74a2d' }}>a </span> Uni<span style={{ color: '#f74a2d' }}>ver</span>sal <span style={{ color: '#f74a2d' }}>Co</span>mpany.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
                  <div className="widget mb-5">
                    <div className="sidebar-links">
                      <ul className="list-unstyled">
                        <li className="active">
                          <Link to="/about"><i className="fas fa-angle-right"></i> About Averco</Link>
                        </li>
                        <li>
                          <Link to="/vision"><i className="fas fa-angle-right"></i> Vision & Mission</Link>
                        </li>
                        <li>
                          <Link to="/products"><i className="fas fa-angle-right"></i> Products</Link>
                        </li>
                        <li>
                          <Link to="/support"><i className="fas fa-angle-right"></i> Support</Link>
                        </li>
                        <li>
                          <Link to="/career"><i className="fas fa-angle-right"></i> Career</Link>
                        </li>
                        <li>
                          <Link to="/contact"><i className="fas fa-angle-right"></i> Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Social Icons */}
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
                <Carouse/>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
