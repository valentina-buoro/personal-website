import React from 'react'
import '../WorkCard/WorkCardStyles.css'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt='imag'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                    <a  href={props.url}>
                      Link to Project
                    </a>
                    <a  className='bt' href={props.github}>
                      Github
                    </a>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard