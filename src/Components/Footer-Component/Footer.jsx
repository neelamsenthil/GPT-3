import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-top">
          <h1>Do you want to step in to the </h1>
          <h1>future before others</h1>

          <div className="footer-top-btn">
            <button> Request Early Access</button>
          </div>

        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <h2>GPT-3</h2>
            <p>Crechterwoord K12 182 Dk Alknjkcb,All Rights Reserved</p>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-right-text">
              <h5>Links</h5>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>

            <div className="footer-right-text">
              <h5>Company</h5>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>

            <div className="footer-right-text">
              <h5>Get in touch</h5>
              <p>Crechterwoord K12 182 Dk Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>

          </div>
        </div>
        <div className="footer-copyright">
            <p>&copy; 2021 GPT-3.All rights reserved.</p>
          </div>


      </div>
    </div>
  )
}

export default Footer