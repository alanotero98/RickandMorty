import React, { useState, useEffect } from 'react';
import './TextoAnimado.css';



function TextoAnimado(props) {


  
  

  const [frases, setFrases] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    setFrases(props.frasesCompletas);
  }, [props.frasesCompletas]);

  useEffect(() => {
    const fraseActual = frases[indiceActual];
    if (fraseActual) {
      const tiempoEspera = fraseActual.length * 85;

      const interval = setInterval(() => {
        setIndiceActual((prevIndice) => prevIndice + 1);
      }, tiempoEspera);

      return () => {
        clearInterval(interval);
      };
    }
  }, [frases, indiceActual]);
  return (
    <>
    {frases[indiceActual] && <p className='parrafo'>{frases[indiceActual]}</p>}
    </>
    
  );
}

export default TextoAnimado;