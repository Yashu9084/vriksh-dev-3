import About from "../About"
import Banner from "../Banner"
import Benefits from "../Benefits"
import Hero from "../Hero"
import Navbar from "../Navbar"
import Portfolio from "../Portfolio"
import Service from "./Service"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Banner/>
      <Benefits/>
      <Portfolio/>
    </div>
  )
}

export default Home