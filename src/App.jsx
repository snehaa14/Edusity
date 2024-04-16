import React, { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {

  const [playState,setPlayState]=useState(false);


  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'></Title>
      <Programs></Programs>
      <About setPlayState={setPlayState}></About>
      <Title subTitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>

      <Title subTitle='TESTIMONIALS' title='What Student Says'></Title>
      <Testimonials/>

      <Title subTitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    
    </div>
  )
}

export default App
