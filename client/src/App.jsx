import {Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Service from './components/pages/Service'

function App() {
 return(
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>
  </>
 )
}

export default App
