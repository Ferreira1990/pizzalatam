import React from 'react'
import CartElements from './CartElements';
import '../components/styles/Carrito.css'
import CartTotal from './CartTotal';

const Carrito = () => {

  
  return (
    <div className='CarritoCustom'>      
      <CartElements />
      <CartTotal />
    </div>
  )
}

export default Carrito;