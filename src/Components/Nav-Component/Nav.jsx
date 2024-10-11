import React, { useContext } from 'react'
import './Nav.css'
import { inputContext } from '../UseContext-Component/Context'
import { Link } from 'react-router-dom'
import menu from '../../assets/menu.png'
import cross from '../../assets/cross.png'

const Nav = () => {
  const { setShowLogin,showNavMenu,setShowNavMenu } = useContext(inputContext)
  return (
    <div className="nav-container">
      <div className='nav'>
        <div className="nav-content">
          <h1>GPT-3</h1>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <a href="#whatisgpt"> <li>What is GPT?</li></a>
            <a href="#future"><li>Case studies</li></a>
            <a href="#possibilities"><li>Open AI</li></a>
            <a href="#article"><li>Library</li></a>

          </ul>


        </div>
        <div className="nav_icon">
          <img onClick={()=>setShowNavMenu(true)} src={menu} alt="" />
        </div>
        <div className="nav-btn">
          <button onClick={() => setShowLogin(true)}>Sign up</button>
        </div>
      </div>


      {showNavMenu ? <div className="menu">
        <div className="menu-content">
          <div className="menu-img">
          <img onClick={()=>setShowNavMenu(false)} src={cross} alt="" />
          </div>

        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <a href="#whatisgpt"> <li>What is GPT?</li></a>
          <a href="#future"><li>Case studies</li></a>
          <a href="#possibilities"><li>Open AI</li></a>
          <a href="#article"><li>Library</li></a>

        </ul>
          <button onClick={() => setShowLogin(true)}>Sign up</button>




        </div>


      </div> : ""}


    </div>
  )
}

export default Nav