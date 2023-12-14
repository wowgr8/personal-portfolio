import React from 'react';
import { BsLink } from 'react-icons/bs';

function ProjectDisplay({ image, name, skills, link }) {
  
  return (
    <div>
      <div className='h-52 md:-h-72 rounded-t-xl relative group' 
        style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}
      >
      </div>

      <div className='text-white rounded-b-xl mt-3 bg-slate-600 py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{name}</h5>      
        <p className="text-[#ADB7BE]">Description placeholder</p>
        <p className="text-[#ADB7BE]">
          {skills}
        </p>
        <div className='flex items-center justify-center'>
          <a href={link}><BsLink className='hover:text-yellow-400' style={{ fontSize: '40px' }}/></a>
        </div>
      </div>

    </div>
  )
}

export default ProjectDisplay;