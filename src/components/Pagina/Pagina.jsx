import './Pagina.css';
import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../cards/Cards';
import NavBar from '../NavBar/NavBar';








function Pagina() {

   const [characters, setCharacters] = useState([]);



      function onSearch(character) {

            fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => {
            
                  if (data.name) {
                        setCharacters((oldChars) => [...oldChars, data]);
                        
                  }
                
                  else {
                        window.alert('¡No hay personajes con este ID!');
                     }
                              }
                        );
                                    }

   const onClose = (id) => {
         setCharacters(characters.filter(char =>  char.id != id))
      }
   
    
   return (

     
            
            
                  <div className='app2'> 

                    <NavBar/> 
                        <SearchBar onSearch={onSearch}/>
                       
                        
                        <Cards characters={characters} onClose={onClose} /> 
                  </div>
               
            
      
            );
}

export default Pagina;