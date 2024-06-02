import About from "../About"
import Banner from "../Banner"
import Hero from "../Hero"
import Navbar from "../Navbar"
import Service from "./Service"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Banner/>
    </div>
  )
}

export default Home