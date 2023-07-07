import './Pagina.css';
import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../cards/Cards';
import NavBar from '../NavBar/NavBar';
import TextoAnimado from '../TextoAnimado/TextoAnimado';
import axios from 'axios';







function Pagina(props) {

   const {onSearch,onClose,characters} = props;
   

   const [frasesCompletas, setFrases] = useState([
      "¡Ey, estupido humano! Estamos en la Home de la app, ¿ves?",
      "Aquí puedes buscar y guardar a tus personajes favoritos.",
      "¡Es una experiencia interdimensional, Morty!",
      
    ]);
    
    

    
    
   return (

     
            
            
                  <div className='app2'> 

                    <NavBar/> 
                    <div className="searchbar-container">
                        <SearchBar onSearch={onSearch} />
                    </div>
                        
                        <Cards characters={characters} onClose={onClose} /> 
                        <TextoAnimado frasesCompletas={frasesCompletas}  />
                                             
                  </div>
               
            
      
            );
}

export default Pagina;