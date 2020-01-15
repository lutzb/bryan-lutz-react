import React from 'react'
import './Footer.scss'
import LinkedInLogo from '../../img/LinkedIn-White-66px-TM.png'

const Footer = () => (
  <div className='footer'>
    <p>Bryan Lutz • Columbus, Ohio • 43221</p>
    <a href='https://www.linkedin.com/in/bryan-lutz-080a6a57/' target='_blank'>
      <img src={LinkedInLogo} className='social-logo' alt=''/>
    </a>
  </div>
)

export default Footer