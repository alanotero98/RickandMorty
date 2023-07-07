import Card from '../Card/Card';
import './cards.css';





export default function Cards(props) {
   let arrayPj = props.characters;
   const {onClose} = props;
   


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
            onClose={() => onClose(personaje.id)}
            />)
            
         })}
   
       
   
   </div>
}
