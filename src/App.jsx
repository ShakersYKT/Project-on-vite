import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import Reviews from './pages/Reviews'


function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/reviews" element={<Reviews/>} />
        </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  )
}

export default App
