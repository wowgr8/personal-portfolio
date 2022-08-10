import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://github.com/wowgr8'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
        <a href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
      </div>
      <p> &copy; 2022 github.com/wowgr8</p>
    </div>
  )
}

export default Footer