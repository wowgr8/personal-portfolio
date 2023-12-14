import React, { useRef } from 'react';
import { Element } from 'react-scroll';
import ProjectDisplay from '../pages/ProjectDisplay';
import { ProjectList } from '../helpers/ProjectList';
import {motion, useInView} from "framer-motion"


function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})

  const cardVariants = {
    initial:{y:50,opacity:0},
    animate: {y:0 , opacity:1}
  }

  return (
    <Element name="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'> 
          My Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {ProjectList.map((project, index) => {
            return (
              <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition = {{duration: 0.3, delay:index * 0.4 }}
              > 
                <ProjectDisplay key={index} name={project.name} image={project.image} skills={project.skills} link={project.link}/>
              </motion.li>
            )
          })}
      </ul>
    </Element>
  )
}

export default Projects