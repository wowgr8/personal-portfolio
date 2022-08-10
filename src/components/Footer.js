import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <BsGithub />
        <BsLinkedin />
      </div>
      <p> &copy; 2022 github.com/wowgr8</p>
    </div>
  )
}

export default Footer