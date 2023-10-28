import React from 'react'
import '../components/styles/Navbar.css'
import { Link } from 'react-router-dom'
import Products from './Products'
import Logopizza from '../assets/Logo.png'
import Customcarritox from '../assets/Carrito.png'
import Bannerx from '../assets/PizzaBanner.jpg'



const Navbar = () => {
  return (
    <div className='CustomnavPadre'>
    <div className='Customnav'>
        <Link to={"/"} className='Customspacegreen'><img className='Customlogo' src={Logopizza} alt="Logo pizza" /> </Link>
        <div className='Customspace'></div>
        <Link to={"/car"} className='Customspacered'><img className='Customcarrito' src={Customcarritox} alt="Imagen de carrito" /></Link>
    </div>
    <div>
        <img className='Bannercustom' src={Bannerx} alt="Banner Pizza" />
        <div className='CardContainer'>
        <Products />
        </div>
      
    </div>
    </div>
  )
}

export default Navbar