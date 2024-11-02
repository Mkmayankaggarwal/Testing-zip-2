import React from 'react';
import { Link } from 'react-router-dom';

function Support() {
  return (
    <>
      <section className="page-title overflow-hidden grey-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="title mb-0">Support<span></span></h1>
            </div>
            <div className="col-lg-6 col-md-12 text-lg-end mt-3 mt-lg-0">
       <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home"></i></Link></li>
            <li className="breadcrumb active" aria-current="page">Home</li>
      <li className="breadcrumb"><Link to="/Support">Our Support</Link></li>
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
              <div className="col-lg-8 col-md-12 mx-auto">
                <div className="dark-bg p-5">
                  <div className="section-title mb-4">
                    <h6>Averco Global Pvt. Ltd.</h6>
                    <h2 className="title">Book <span>Support Now!</span></h2>
                    <p className="text-white">Kindly fill your details for any support from AVERCO team, we will try to serve you in the shortest possible time during our working hours.</p>
                  </div>
                  <form id="quote-form" className="row" method="post" action="http://themeht.com/hectolab/html/ltr/php/contact.php" noValidate>
                    <div className="messages"></div>
                    <div className="form-group col-sm-6">
                      <input id="form_name_person" type="text" name="name_person" className="form-control" placeholder="Contact Person’s Name" required data-error="Name is required." />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-sm-6">
                      <input id="form_name_org" type="text" name="name_org" className="form-control" placeholder="Individual/Hospital/Organization’s Name" required data-error="Name is required." />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-sm-6">
                      <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Contact No" required data-error="Phone is required" />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-sm-6">
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="Mail ID" required data-error="Valid email is required." />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-sm-12">
                      <textarea id="form_message" name="message" className="form-control" placeholder="Support Details"  rows="4" required data-error="Support details are required."></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-sm-12 mt-3">
                      <button className="btn btn-theme btn-radius"><span>Support</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Support;
