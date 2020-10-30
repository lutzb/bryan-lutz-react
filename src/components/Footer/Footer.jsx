import React from 'react'
import './Footer.scss'
import LinkedInLogo from '../../img/LinkedIn-White-66px-TM.png'
import GitHubLogo from '../../img/GitHub-Mark-Light-64px.png'
import TwitterLogo from '../../img/Twitter_Social_Icon_Circle_White.svg'

const Footer = () => (
  <div className='footer'>
    <p>Bryan Lutz • Columbus, Ohio • 43221</p>
    <div>
      <a href='https://www.linkedin.com/in/bryan-lutz-080a6a57/' target='_blank' rel='noopener noreferrer'>
        <img src={LinkedInLogo} className='social-logo' alt=''/>
      </a>
      <a href='https://github.com/lutzb' target='_blank' rel='noopener noreferrer'>
        <img src={GitHubLogo} className='social-logo' alt=''/>
      </a>
      <a href='https://twitter.com/blutzer' target='_blank' rel='noopener noreferrer'>
        <img src={TwitterLogo} className='social-logo' alt=''/>
      </a>
    </div>
  </div>
)

export default Footer
