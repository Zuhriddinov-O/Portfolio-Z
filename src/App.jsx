import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home'
import About from './about/about'
import Navbar from './views/navbar'


function App() {

  return (
    <> 
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
      </Routes>
    </>
  )
}

export default App
