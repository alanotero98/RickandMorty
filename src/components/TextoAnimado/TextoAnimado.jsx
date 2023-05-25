import React, { useState, useEffect } from 'react';
import './TextoAnimado.css';

import { Howl, Howler } from 'howler';

function TextoAnimado() {
  const [frases, setFrases] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const frasesCompletas = [
      "¡Estas en la Home de la app!",
      "Busca y guarda a tus personajes favoritos.",
      
      
      
      // "Estas en el Home, aqui puedes buscar tu personaje favoritos y guardarlo para tí",
      // "Busca tu personaje en el buscador escribiendo un numero",


      // '¡Hola, insignificantes mortales!',
      // 'Soy Rick, el ser más brillante y astuto de todos los universos.',
      // 'Vengo a presentarles una aplicación, aunque sé que su intelecto limitado apenas puede comprender su propósito.',
      // 'Esta app patética les permitirá coleccionar los personajes de todas las realidades de este vasto y estúpido universo en el que se arrastran.',
      // 'Sí, es tan grande y patético como todos ustedes juntos.',
      // '¡Eres tan patético que hasta me da náuseas!',
      // 'Pero bueno, supongo que pueden intentar entretenerse con esta aplicación sin sentido, al igual que su existencia sin sentido en este mar de mediocridad.',
      // '¡Eructooo!',
      // 'Ahh me olvidaba escriban un número en el buscador de arriba y yo les enviaré una carta con su personaje idiota que de seguro es menos inteligente que yo'
    ];

    setFrases(frasesCompletas);
  }, []);

  useEffect(() => {
    const fraseActual = frases[indiceActual]; // == "," 
      if (fraseActual) {
          const tiempoEspera = fraseActual.length * 45; //  Ajusta el factor multiplicador según tus necesidades
          
            // const sound = new Howl({
            //     src: ['./assets/rick.wav'],
            //     autoplay: true,
            //     loop: true,
            //   });
            // sound.play();
          
            // Howler.volume(1.0); // Ajusta el volumen de la música (opcional)

              const interval = setInterval(() => {
                setIndiceActual((prevIndice) => prevIndice + 1);
              }, tiempoEspera);

              return () => {
                clearInterval(interval);
                // sound.stop();
              };
      }
  }, [frases, indiceActual]);
  return (
    <div>
      {frases[indiceActual] && <p className='parrafo'>{frases[indiceActual]}</p>}
    </div>
  );
}

export default TextoAnimado;