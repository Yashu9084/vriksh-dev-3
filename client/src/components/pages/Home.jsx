import About from "../About"
import Banner from "../Banner"
import Benefits from "../Benefits"
import Hero from "../Hero"
import Navbar from "../Navbar"
import Portfolio from "../Portfolio"
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
      {/* <Portfolio/> */}
      {/* <Timeline/> */}
    </div>
  )
}

export default Home