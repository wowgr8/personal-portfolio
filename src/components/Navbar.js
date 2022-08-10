import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { Divide as Hamburger } from 'hamburger-react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button>
          <Hamburger />
        </button>
      </div>
      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/experience'> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar