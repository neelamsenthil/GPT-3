import React from 'react'
import './Possibiliti.css'
import possibility from '../../assets/possibility.png'

const Possibiliti = () => {
  return (
    <div className='possibilities'id='possibilities'>
        <div className="possibilities-img">
            <img src={possibility} alt="" />
        </div>
        <div className="possibilities-content">
            <div className="possibilities-text1">
            <p>Request Early Access to Get Started</p>
            </div>
            <div className="possibilities-text2">
            <h2>The Possibilities are </h2>
            <h2>beyond Your imagination</h2>
            </div>
            <div className="possibilities-text3">
            <p>Yet bed any for travalling assistance indulgence unpleasing.
            Not throughts all excercise blessing. indulgence way
            everything joy alternation boisterous the attachment.
            Party we years to order allow asked of.</p>
            </div>
            <div className="possibilities-text4">
                <p>Request Early Access to Get Started</p>
            </div>


        </div>

    </div>
  )
}

export default Possibiliti