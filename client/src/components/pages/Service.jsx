import React from 'react'
import Navbar from '../Navbar'
import ServiceHero from '../ServiceHero'
import Quote from '../Quote'
import Banner from '../Banner'
import Footer from '../Footer'
import Faq from '../Faq'

const Service = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
    <Navbar/>
    <ServiceHero/>
    <Quote/>
    <Banner text="GROW.NURTURE.THRIVE"/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Service