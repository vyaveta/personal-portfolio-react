import React from 'react'
import './Services.css'
import Card from '../Cards/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

function Services() {
  return (
   <div className="services">
    {/* left side */}
    <div className="awesome">
     <span>My Sublime</span>
     <span>Services</span>
     <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.
        <br />
        Lorem ipsum dolor sit amet consectetur.
     </span>
     <a href="">
     <button className="button s-button">Download CV</button>
     </a>
     <div className="blur s-blur1" style={{background: '#abf1ff94',top:'8rem',left:'-9rem'}}></div>
    </div>
    {/* right side */}
    <div className="cards">
        <div className="s-card">
            <Card 
            emoji = {HeartEmoji}
            heading = {'Front-End'}
            detail = {'Bootstrap, Css, JavaScript, React, Figma'}
            />
        </div>
        <div className="s-card2">
            <Card 
            emoji = {Glasses}
            heading = {'Backend'}
            detail = {'Nodejs, Express, Mongodb'}
            />
        </div>
        <div className="s-card3">
            <Card 
            emoji = {Humble}
            heading = {'Personal skills'}
            detail = {' English communication, Teamwork, Consistency '}
            />
        </div>
        <div className="blur s-blur2" style={{background: 'var(--purple)',left: '16rem'}}></div>
    </div>
   </div>
  )
}

export default Services