import React from 'react'
import Card from '../Card/Card';

import { useState, useEffect } from 'react';


const CardsFav = (props) => {
   const {onClose} = props;
  return (
    <div>
        <div className='card' >
      
      
      {props.characters.map((personaje, index) => {
         return (<Card 
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={() => personaje.onClose(personaje.id)}
            isActive={index === currentStoryIndex}
            />)
            
         })}
   
       
   
   </div>
    </div>
  )
}

export default CardsFav