import { Link } from 'react-router-dom';
import './card.css';
import { FaTimesCircle }  from 'react-icons/fa';


export default function Card(props) {

  
  
   return (

      <div className='divContenedor'>
            <div className='Card' key={props.id}   >
            
               <FaTimesCircle 
                     className='boton'  
                     onClick={props.onClose} 
               />
            
            
               <div className='info'>
               <Link to={`/detail/${props.id}`}>
                        <img src={props.image} alt="" />
                     </Link>
                     <h2 className='id'>{props.id}</h2>
                     <h2 className='nombre'>{props.name}</h2>
                     <h2 className='status'>({props.status})</h2>
                     {/* <h2 className='gender'>{props.gender}</h2>
                     <h2 className='origin'>{props.origin}</h2>  */}
                     
                     
               </div>
            </div>
      </div>
   );
}
