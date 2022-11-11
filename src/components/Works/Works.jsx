import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

function Works() {
  return (
    <div className="works">
         <div className="awesome">
     <span>Works and</span>
     <span>Respositories</span>
     <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.
        <br />
        Lorem ipsum dolor sit amet consectetur.
        <br />
        Lorem ipsum dolor sit amet.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.

     </span>
     <a href="">
     <button className="button s-button">Hire me</button>
     </a>
     <div className="blur s-blur1" style={{background: '#abf1ff94',top:'8rem',left:'-9rem'}}></div>
    </div>
    {/* right side */}
    <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle blueYellow"></div>
    </div>
    </div>
  )
}

export default Works