import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p> "Welcome to Edusity, your ultimate destination for unlocking the doors to knowledge and discovery! At Edusity, we believe that education knows no bounds, and our platform is designed to empower learners of all ages and backgrounds. With engaging content, interactive lessons, and expert instructors, embark on a journey of growth and enlightenment with Edusity today!"</p>
      
      <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      
      </div>
    </div>
  )
}

export default Hero
