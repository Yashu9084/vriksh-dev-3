import {Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import ContactUs from './components/pages/ContactUs'

function App() {
 return(
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
  </>
 )
}

export default App
