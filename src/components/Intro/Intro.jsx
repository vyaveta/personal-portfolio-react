import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassesEmoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

function Intro({pStart , pEnd}) {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi I am</span>
                <span>Adwaith!</span>
                <span className='p-tag'>{pStart} <span className='intro-txt' >Self taught MERN stack developer who spends most of his time staring at the code and now you are staring at the Adwaith's portfolio made using React. </span> <span className='p-tag'>{pEnd}</span></span>
            </div>
            <button className=" button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="www.youtube.com" target='_blank'><img  src={Github} alt="" /></a>
                <a href=""><img src={LinkedIn} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src="" alt="" />
           <img src={GlassesEmoji} alt="" />
           <div className="floating-box1">
            <FloatingDiv crownImage={Crown} txt1='MERN ' txt2='stack' />
           </div>
           <div className="floating-box2">
           <FloatingDiv crownImage={Thumbup} txt1='Self ' txt2='taught' />
           </div>
           {/* blur div */}
           <div className="blur" style={{background: 'rgba(238, 210, 255,0.8)'}}></div>
           <div className="blur" style={{background: '#c1f5ff', top: '5rem', left:'-18%' }}></div>
        </div>
    </div>
  )
}

export default Intro