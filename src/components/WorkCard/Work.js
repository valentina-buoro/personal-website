import React from 'react'
import '../WorkCard/WorkCardStyles.css'
import WorkCard from './WorkCard'
import ProjectCardData from './WorkData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
         {ProjectCardData.map((val,index)=>{
            return(
                <WorkCard 
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                url={val.url}
                github={val.github}
                />
            )
         })}  
        </div>
    </div>
  )
}

export default Work