import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { addFav, removeFav } from '../../Redux/actions';
import './card.css';
import { FaTimesCircle }  from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';




function Card(props) {

   const [fav, setFav] = useState(false)

   const navigate = useNavigate();
   const {id,name,gender,species,image,status,origin,onClose,addFav,removeFav,  myFavorites} =  props
   

   function navigateHandler(){
      navigate(`/detail/${props.id}`)
   }

   function handleFavorite(){
      if(fav){
         setFav(false);
         removeFav(id)
      }else{
         setFav(true);
         addFav (props)  
      }
     }

     useEffect(() => {
      if (myFavorites) {
        myFavorites.forEach((fav) => {
          if (fav.id === props.id) {
            setFav(true);
          }
        });
      }
    }, [myFavorites]);
  
  
   return (

      <div className='divContenedor'>
            <div className='Card' key={id}   >
            
               <FaTimesCircle 
                     className='boton'  
                     onClick={props.onClose} 
               />
            
            
               <div className='info'>
                  <div className='img'>
                        <img src={image} alt="" />
                     <div class="buttons">
                        
                          

                           {
                              fav ? (
                                 <button class="me-gusta" onClick={handleFavorite}>
                                    ❤️
                                 </button>
                              ) : (
                                 <button class="me-gusta" onClick={handleFavorite}>
                                    🤍
                                 </button>
                              )
                           }

                        <button class="ver-mas" onClick={navigateHandler}>
                           <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                     
                     </div>
                  </div>
                     
                     <h2 className='nombre'>{id} - {name}</h2>
                     <p className='status'>Status: {status}</p>
                     <p className='status'>Gender: {gender}</p>
                   
                     
                       
                     
                     
               </div>
            </div>
      </div>
   );
}


//Action funcion para despachar character al estado global

const mapDispatchToProps = (dispatch) => {

   return{
      addFav: (character) => addFav(character),

      removeFav: (id) => dispatch(removeFav(id))
   };
};

//Action funcion para pasarle el estado global al componente

const mapStateToProps = (state) => {

   return{
      favorites: state.myFavorites
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)
