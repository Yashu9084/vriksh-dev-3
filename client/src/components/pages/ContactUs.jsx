import React from 'react'
import Navbar from '../Navbar'
import contact from '../../assets/contact.png'
import Contact from '../Contact'
import Banner from '../Banner'
import Footer from '../Footer'
const ContactUs = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        <Navbar/>
        <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] md:px-[5vw] md:gap-[4vw] flex font-lato text-white items-center">
            <img className='w-full' src={contact} alt=''/>
        </div>
        <Contact/>
        <Banner text="Creating Your Success Story"/>
        <Footer/>
    </div>
  )
}

export default ContactUs