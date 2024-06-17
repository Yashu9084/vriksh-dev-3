import About from "../About";
import Banner from "../Banner";
import Banner2 from "../Banner2";
import Benefits from "../Benefits";
import Contact from "../Contact";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Portfolio from "../Portfolio";
import ServiceSection from "../ServiceSection";
import Testimonials from "../Testimonials";
import Workflow from "../Workflow";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ServiceSection />
      <Banner text={"GROW.NURTURE.THRIVE  "} />
      <Benefits />
      <Portfolio />
      <Workflow />
      <Banner2 />
      <Testimonials />
      <Contact />
      <Banner text={"ELEVATING YOUR WEB PRESENCE  "}/>
      <Footer />
      {/* <Timeline/> */}
    </div>
  );
};

export default Home;
