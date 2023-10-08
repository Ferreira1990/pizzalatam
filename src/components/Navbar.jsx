import React from 'react'
import '../components/styles/Navbar.css'
import { Link } from 'react-router-dom'
import Products from './Products'



const Navbar = () => {
  return (
    <div className='CustomnavPadre'>
    <div className='Customnav'>
        <Link to={"/"} className='Customspacegreen'><img className='Customlogo' src="src\assets\Logo.png" alt="Logo pizza" /> </Link>
        <div className='Customspace'></div>
        <Link to={"/car"} className='Customspacered'><img className='Customcarrito' src="src\assets\Carrito.png" alt="Imagen de carrito" /></Link>
    </div>
    <div>
        <img className='Bannercustom' src="src\assets\PizzaBanner.jpg" alt="Banner Pizza" />
        <div className='CardContainer'>
        <Products />
        </div>
      
    </div>
    </div>
  )
}

export default Navbar