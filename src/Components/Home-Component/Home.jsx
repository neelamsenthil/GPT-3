import React, { useContext } from 'react'
import './Home.css'
import Nav from '../Nav-Component/Nav'
import Header from '../Header-Component/Header'
import { inputContext } from '../UseContext-Component/Context'
import Login from '../LogIn-Component/Login'
import Company from '../Company-Component/Company'
import WhatisGPT from '../WhatisGPT-Component/WhatisGPT'
import Future from '../Future-Component/Future'
import Possibiliti from '../Possibilities-Component/Possibiliti'
import Blog from '../Blog-Component/Blog'
import Article from '../Article-Component/Article'
import Footer from '../Footer-Component/Footer'

const Home = () => {
  const {showLogin}= useContext(inputContext)
  return (
    <>
    {showLogin ? <Login />
        :<div className='home'>
        <Nav />
        <Header />
        <Company />
        <WhatisGPT />
        <Future />
        <Possibiliti />
        <Blog />
        <Article />
        <Footer />
    </div>}

    </>
  )
}

export default Home