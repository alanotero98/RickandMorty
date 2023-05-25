import React from 'react'
import './NavbarLateral.css'
import rickymorty from './img/Rick_and_Morty.png'
import morty from './img/Rick_and_Morty.svg.png'
import { NavLink } from 'react-router-dom'



const NavbarLateral = () => {
  return (
    <div className='navbar-lateral'>
        <div className='titulo'> 
        <img className='rick' src={rickymorty} alt="" />
       
        <img className='morty' src={morty} alt="" />
        </div>

        <div className='tres'>
            <div className='botones'>
              
            <NavLink to='/' className='uno'>Home</NavLink>    
            <NavLink to='/favoritos' className='dos'>Favoritos</NavLink>   
            <NavLink to='/about' className='tress'>About me</NavLink>         
            </div>
        </div>
        
      
    </div>  
  )
}

export default NavbarLateral