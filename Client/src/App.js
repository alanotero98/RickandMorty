
import './App.css';

import NavBar from './components/NavBar/NavBar';

// import TextoAnimado from './components/TextoAnimado.jsx/TextoAnimado';

import { Route, Routes } from 'react-router-dom';
import Pagina from './components/Pagina/Pagina';
import NotFound from './components/NotFound/NotFound';
import Detail from './components/Detail/Detail';
import Favoritos from './components/Favoritos.jsx/Favoritos';
import { useState } from 'react';
import axios from 'axios';









function App() {
   const [characters, setCharacters] = useState([]);
   const [cache, setCache ] = useState({});

   function onSearch(character) {

      if (cache.hasOwnProperty(character)) {
            window.alert('¡Este personaje ya ha sido buscado!');
            return; // Salir de la función para evitar la solicitud repetida
          }

          axios.get(`http://localhost:5040/rickandmorty/character/${character}`)
          .then((response) => {
            const data = response.data; // Aquí se obtienen los datos directamente de la respuesta
            
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
              setCache((oldCache) => ({
                ...oldCache,
                [character]: data
              }));
            } else {
              alert(["Solo se aceptan buscar personajes por ID numérico"]);
            }
          })
          .catch((error) => {
            // Maneja el error
            console.error(error);
          });
 }

const onClose = (id) => {
   setCharacters(characters.filter(char =>  char.id != id))
   setCache(prevCache => {
      const filteredCache = Object.fromEntries(
        Object.entries(prevCache).filter(([key, value]) => value.id !== id)
      );
      return filteredCache;
    });
}
   
    
   return (
     <div className='App'>
            
            <div className='app2'> 
               <NavBar/> 
                  <Routes>
                     <Route path='*' element={<NotFound />}/>
                     <Route path='/' element={<Pagina onClose={onClose} onSearch={onSearch} characters={characters}/>} />
                     <Route path='/favoritos' element={<Favoritos onClose={onClose} characters={characters} />} />
                     <Route path="/detail/:detailID" element={<Detail />} />
                  </Routes>
            </div>
      </div>
         );
      
}

export default App;
