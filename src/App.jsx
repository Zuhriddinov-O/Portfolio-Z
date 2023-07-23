import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home'
import About from './about/about'
import Navbar from './views/navbar'
// import Footer from './views/footer'
// import MainIcon from "/p.jpg"


function App() {

  return (
    <> 
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
