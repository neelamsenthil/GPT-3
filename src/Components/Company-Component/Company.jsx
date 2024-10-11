import React from 'react'
import './Company.css'
import atlassian from '../../assets/atlassian.png'
import google from '../../assets/google.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'


const Company = () => {
  return (
    <div className='company'>
        <img src={google} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
    </div>
  )
}

export default Company