import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./Detail.css"
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TextoAnimado from '../TextoAnimado/TextoAnimado';

const Detail = (props) => {




    console.log(props);
    const {detailID} = useParams();
    const [character, setCharacter] = useState({})

  

    useEffect(() =>{

    
    fetch(`https://rickandmortyapi.com/api/character/${detailID}`)
    .then((response) => response.json())
    .then((char) => {
        console.log(char)
          if (char) {
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
       
            
            const [frasesCompletas, setFrases] = useState([
              `este es el personaje llamado` + character.name,
              
            ]);  
           

  return (
    <div className='detail'>
<NavBar/> 
        <h1 className='t'>{character.name}</h1>
        <img className="imagen" src={character.image} alt="" />
      <div className='informacion'>
        <div className='info-hijo'>
          <h2>ID: {character.id}</h2>
        <h2 >Estado: {character.status}</h2>
        <h2>Especie: {character.species}</h2>
        <button><Link to="/">&#128281;</Link></button>
        </div>
      
    </div>
    <TextoAnimado frasesCompletas={frasesCompletas} />
    </div>
  
  )
}

export default Detail