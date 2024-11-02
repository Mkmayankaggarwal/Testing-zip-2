import { Routes, Route ,useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home.jsx"
import About from './About';
import Products from './Products';
import Support from './Support';
import Career from './Career';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Vision from './Vision';
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx"
import Modals from "./Modal/Modal.jsx"
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Preloader from "./Preloader.jsx";
import LoadingScreen from "./LoadingScreen.jsx";


const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen onLoad={handleLoadingComplete} />}
      {!loading && (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact/>} />     
        <Route path="/Vision" element={<Vision />} />     
      </Routes>
      <Modals/> 
      {/* <ColorCustomizer/> */}
      <ScrollToTop/>
      <Footer/>
    </>
    )}
    </>
  );
}

export default App;

