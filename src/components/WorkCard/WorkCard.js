import React from 'react'
import { NavLink } from 'react-router-dom'
import { DarkButton } from '../styles/Button'
import '../WorkCard/WorkCardStyles.css'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt='imag'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to={props.url}>
                            <DarkButton className='bt'>
                                VIEW
                            </DarkButton>
                        </NavLink>

                        <NavLink to={props.github}>
                            <DarkButton className='bt'>
                                SOURCE
                            </DarkButton>
                        </NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard