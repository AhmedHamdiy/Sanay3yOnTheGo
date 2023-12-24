import React, { useState } from 'react'
import {Link,NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

import '../styles/Card.css'
import TechDetails from '../Routes/TechDetails'
 import YellowStarsRating from './YellowStarsRating';
 import sample from '../images/test.png'



const Card = ({tech}) => {

 
 
  return (
    <div className='card-tech2'>
        <img src= {sample} width={150} style={{marginBottom:10,borderRadius:10}}/>
        <NavLink to={`/TechDetails/${tech.id}`}  >
        <h3>{tech.name}</h3>
        </NavLink>
      <YellowStarsRating rating={tech.rating} />

      

    </div>
  )
}

export default Card