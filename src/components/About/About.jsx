import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {
          setPlayState(true); // Corrected syntax
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Edusity is an innovative online education platform designed to revolutionize the way we learn and teach. Offering a diverse range of courses across various disciplines, Edusity caters to learners of all ages and backgrounds. Whether you're a student looking to supplement your traditional education or a professional seeking to upskill in your career, Edusity provides accessible, high-quality content taught by expert instructors from around the globe.</p>
      
        <p>What sets Edusity apart is its interactive learning experience, combining live classes, on-demand lectures, and engaging multimedia resources. Through intuitive interfaces and advanced technology, students can interact with instructors and peers in real-time, fostering collaboration and deepening understanding. Additionally, Edusity's personalized learning paths and flexible scheduling empower individuals to learn at their own pace and on their own terms. With Edusity, education becomes not just a destination, but a dynamic journey of discovery and growth.</p>
      </div>
    </div>
  )
}

export default About
