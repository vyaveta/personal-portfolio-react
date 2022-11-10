import React from 'react'
import './FloatingDiv.css'

function FloatingDiv({crownImage,txt1,txt2}) {
  return (
    <div className="floatingdiv">
        <img src={crownImage} alt="" />
        <span>
            {txt1} <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv