import React from 'react'

const HandleSearch = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${searchId}`);
      const data = await response.json();
      if (data.error) {
        // Si el servidor devuelve un error, muestra un mensaje de error
        console.error(data.error);
        return;
      }
      // Si la búsqueda tiene éxito, actualiza los datos del personaje en el estado
      setName(data.name);
      setStatus(data.status);
      setGender(data.gender);
      setOrigin(data.origin.name);
      setImage(data.image);
      setId(data.id);
    } catch (error) {
      // Si ocurre un error al buscar el personaje, muestra un mensaje de error
      console.error(error);
    }
  };

export default HandleSearch