import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="w-full h-250 bg-blue-950 flex flex-col justify-center items-center pt-12 mt-250">
      <div className="flex">
        <a href="https://github.com/wowgr8" className="text-white m-7 text-5xl">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/cesar-aug-lopez/" className="text-white m-7 text-5xl">
          <BsLinkedin />
        </a>
        <a href="mailto:lopez.cesar.aug@gmail.com" className="text-white m-7 text-5xl">
          <AiOutlineMail />
        </a>
      </div>
      <p className="text-white text-xl">&copy; 2022 github.com/wowgr8</p>
    </div>

  )
}

export default Footer