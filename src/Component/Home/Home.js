import React from "react";
import Slider from "./Slider";
import About from "./About";
import Ourproduct from "./Ourproduct";
import Footer from "../../Common/Footer";
import Seprator from "./Seprator";
import CompanyAbout from "./CompanyAbout";
import Testimonial from "./Testimonial";
import Location from "../../Common/Location";
import HomeSlider from "./Slider";
import Project from "./Project";
const Home =()=>{
    return(
        <>
        <HomeSlider/>
        <Ourproduct/>
        <Seprator/>
      <CompanyAbout/>
         {/* <Testimonial/> */}
         <Project/>
       <Location />
         <Footer/>
        
        {/* <About/> */}
        </>
    )
}
export default Home