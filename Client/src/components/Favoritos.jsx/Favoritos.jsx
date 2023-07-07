import React from 'react';
import { useState, useEffect } from 'react';
import TextoAnimado from '../TextoAnimado/TextoAnimado';
import { connect } from "react-redux"
import {removeFav } from "../../Redux/actions"
import Card from '../Card/Card';





      const Favoritos = ({myFavorites, removeFav, onClose }) => {

              

              console.log(myFavorites);
              


              function closeFavorite(id){
                onClose(id)
                removeFav (id)
            }

              const frasesCompletas = [
                "¡Ey, escucha! Aquí están tus personajes favoritos, ¿ves? Los tienes justo delante de tus ojos.",
                "Puedes buscarlos por ID o si quieres, también puedes borrarlos si ya no te interesan.",  ];

             

            


            



              return (
                <div>
                  
                  
                  <TextoAnimado frasesCompletas={frasesCompletas}/>
                  <div>
            
            { 
            myFavorites.map((element,index)=>{
            return (
            
               <Card
                 key={element.id}
                 id={element.id}
                 mane={element.name}
                 status={element.status}
                 species={element.species}
                 gender={element.gender}
                 origin={element.origin.name}
                 image={element.image}
                 onClose={()=>closeFavorite(element.id)}></Card>
               
             
          
           
              )
           }
        )
            }</div>
                
                </div>
              )
            }

            function mapState(st){
              return {
                  myFavorites : st.myFavorites,
              };
          }
          function mapDispatch(d){
              return{
                  removeFav :(id)=>d(removeFav (id))
              }
          }
          export default connect(mapState,mapDispatch)(Favoritos)