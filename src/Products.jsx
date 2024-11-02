import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  return (
    <>
    <div className="page-wrapper">
    <section className="page-title overflow-hidden grey-bg">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12">
        <h1 className="title mb-0">Our <span>Products</span></h1>
      </div>
       <div className="col-lg-6 col-md-12 text-lg-end mt-3 mt-lg-0">
       <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home"></i></Link></li>
            <li className="breadcrumb active" aria-current="page">Products</li>
			<li className="breadcrumb"><Link to="/products">Our Products</Link></li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<section className="prod1">
  <div className="container">
    <div className="row"> 
      <div className="col-lg-4 col-md-6">
        <div className="featured-item featured-item1 text-center">
          <div className="featured-icon">  <img id="logo-img" className="img-fluid" src="images/client/p1.jpg" alt=""/>
          </div>
          <div className="featured-title text-uppercase"> 
            <h5><a href="#">Pulse Oximeter</a></h5>
          </div> 
         
        </div>
      </div>
	   <div className="col-lg-4 col-md-6">
        <div className="featured-item featured-item1 text-center">
          <div className="featured-icon">  <img id="logo-img" className="img-fluid" src="images/client/p2.jpg" alt=""/>
          </div>
          <div className="featured-title text-uppercase"> 
            <h5><a href="#">Patient Monitors</a></h5>
          </div> 
        
        </div>
      </div>
	   <div className="col-lg-4 col-md-6">
        <div className="featured-item featured-item1 text-center">
          <div className="featured-icon">  <img id="logo-img" className="img-fluid" src="images/client/p3.jpg" alt=""/>
          </div>
          <div className="featured-title text-uppercase"> 
            <h5><a href="#">ICU Ventilators</a></h5>
          </div> 
        
        </div>
      </div>
	   <div className="col-lg-4 col-md-6">
        <div className="featured-item featured-item1 text-center">
          <div className="featured-icon">  <img id="logo-img" className="img-fluid" src="images/client/p4.jpg" alt=""/>
          </div>
          <div className="featured-title text-uppercase"> 
            <h5><a href="#">Transport Ventilators</a></h5>
          </div> 
        
        </div>
      </div>
	   <div className="col-lg-4 col-md-6">
        <div className="featured-item featured-item1 text-center">
          <div className="featured-icon">  <img id="logo-img" className="img-fluid" src="images/client/p5.jpg" alt=""/>
          </div>
          <div className="featured-title text-uppercase"> 
            <h5><a href="#">ECG Machine </a></h5>
          </div> 
        
        </div>
      </div>
	   <div className="col-lg-4 col-md-6">
        <div className="featured-item featured-item1 text-center">
          <div className="featured-icon">  <img id="logo-img" className="img-fluid" src="images/client/p6.jpg" alt=""/>
          </div>
          <div className="featured-title text-uppercase"> 
            <h5><a href="#">Syringe Pumps</a></h5> 
          </div> 
         
        </div>
      </div>
	  


 </div>
  </div>
</section>
</div>
    </>
  );
};

export default Products;
