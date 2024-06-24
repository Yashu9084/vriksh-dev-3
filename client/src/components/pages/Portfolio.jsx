import React from 'react'
import Navbar from '../Navbar'
import PortfolioGallery from '../PortfolioGallery'
import Footer from '../Footer'

const Portfolio = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
    <Navbar/>
    <PortfolioGallery/>
    <Footer/>
    </div>
  )
}

export default Portfolio