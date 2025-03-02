import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App