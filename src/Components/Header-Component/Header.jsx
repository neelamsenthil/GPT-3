import React from 'react'
import './Header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'


const Header = () => {
  return (
    <div className='header' id='home'>
      <div className="header-left">
        <span>Let's Build Something</span>
        <span>amazing with GPT-3</span>
        <span>OpenAI</span>
        <div className="header-para">
          <p>Yet bed any for travalling assistance indulgence unpleasing.
            Not throughts all excercise blessing. indulgence way
            everything joy alternation boisterous the attachment.
            Party we years to order allow asked of.  </p>
        </div>

        <div className="header-input">
          <input type="email" placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className="header-people">
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="header-right">
        <img src={ai} alt="image" />
      </div>

    </div>
  )
}

export default Header