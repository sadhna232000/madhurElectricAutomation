import React from "react";
import Slider from "./Slider";
import About from "./About";
import Ourproduct from "./Ourproduct";
import Footer from "../../Common/Footer";
import Seprator from "./Seprator";
import CompanyAbout from "./CompanyAbout";
import Testimonial from "./Testimonial";
import Location from "../../Common/Location";
const Home =()=>{
    return(
        <>
        <Slider/>
        <Ourproduct/>
        <Seprator/>
        <CompanyAbout/>
        <Testimonial/>
       <Location/>
        <Footer/>
        
        {/* <About/> */}
        </>
    )
}
export default Home