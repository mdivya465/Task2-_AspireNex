import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import './App.css'
import Cart from './component/Cart'
import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import About from './component/About'


function App() {
  return (
    <div>
        <Nav/>
        <Home/>
        
          <Routes>
          <Route path="/cart" element={<Cart />} />
          </Routes>
          <Routes>
          <Route path="/about" element={<About />} />
          </Routes>
        
    </div>
  )
}

export default App