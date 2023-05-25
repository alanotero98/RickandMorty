import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./Detail.css"
const Detail = (props) => {

    
    const {detailID} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() =>{

    
    fetch(`https://rickandmortyapi.com/api/character/${detailID}`)
    .then((response) => response.json())
    .then((char) => {
        console.log(char)
          if (char.name) {
                setCharacter(char);
                
          }
        
          else {
                window.alert('¡No hay !');
             }
                      }
                )
            .catch((err) => {
                window.alert('¡no Funciona!');
            });
            return setCharacter({});
            },[detailID])
            

  return (
    <div>
        <h1 className='t'>{character.name}</h1>
        
                     <h2 className='status'>({character.status})</h2>
                     <img src={character.image} alt="" />
    </div>
  )
}

export default Detail