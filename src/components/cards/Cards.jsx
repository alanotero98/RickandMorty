import Card from '../Card/Card';
import TextoAnimado from '../TextoAnimado/TextoAnimado';
import './cards.css';





export default function Cards(props) {
   let arrayPj = props.characters;
   
   


   return <div className='card' >
      
      
      {arrayPj.map((personaje) => {
         return (<Card 
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={() => props.onClose(personaje.id)}
            />)
            
         })}
   
       <TextoAnimado />
   
   </div>
}
