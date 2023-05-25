import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';


export default function SearchBar(props) {

  const [character, setCharacter] = useState("");
  
  const handleChange = (e) => {
      let {value} = e.target;
      setCharacter(value);
      
      
   }

   const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        props.onSearch(character);
        setCharacter("")
      }
    };

   return (
      <div className='todoInput'>
         <input className="input" 
                type='search' 
                name='seach'
                id='search'
                value={character}
                placeholder='Busque su personaje'  
                onChange={handleChange}
                onKeyDown={handleKeyPress}
         />
         <FaSearch 
          className='botton'
         onClick={() => { props.onSearch(character) 
            setCharacter('')  
         }} />
      </div>
   );
}
