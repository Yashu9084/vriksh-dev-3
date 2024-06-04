import About from "../About"
import Banner from "../Banner"
import Banner2 from "../Banner2"
import Benefits from "../Benefits"
import Contact from "../Contact"
import Footer from "../Footer"
import Hero from "../Hero"
import Navbar from "../Navbar"
import Portfolio from "../Portfolio"
import Testimonials from "../Testimonials"
import Workflow from "../Workflow"
import Service from "./Service" 

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Banner/>
      <Benefits/>
      <Portfolio/> 
      <Workflow/>
      <Banner2/>  
      <Testimonials/>
      <Contact/>
      <Banner/>
      <Footer/> 
      {/* <Timeline/> */}
    </div>
  )
}

export default Home