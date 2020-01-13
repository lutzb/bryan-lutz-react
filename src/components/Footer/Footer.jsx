import React from 'react'
import './Footer.scss'
import LinkedInLogo from '../../img/LinkedIn.png'

const Footer = () => (
  <div className='footer'>
    <p>Bryan Lutz • Columbus, Ohio • 43221</p>
    <img src={LinkedInLogo} className='social-logo' alt=''/>
  </div>
)

export default Footer