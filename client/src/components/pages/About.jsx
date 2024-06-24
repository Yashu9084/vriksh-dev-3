import React from 'react'
import Navbar from '../Navbar'
import ServiceHero from "../ServiceHero"
import Banner from '../Banner'
import Founders from '../Founders'
import Testimonials from '../Testimonials'
import Contact from '../Contact'
import Footer from '../Footer'
import Vision from '../Vision'

const About = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        <Navbar/>
        <ServiceHero/>
        <Banner text={"ELEVATING YOUR WEB PRESENCE  "}/>
        <Founders/>
        <Vision/>
        <Testimonials/>
        <Contact/>
        <Banner text={"ELEVATING YOUR WEB PRESENCE  "}/>
        <Footer/> 
    </div>
  )
}

export default About