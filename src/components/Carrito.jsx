import React from 'react'
import CartElements from './CartElements';
import '../components/styles/Carrito.css'
import CartTotal from './CartTotal';

const Carrito = () => {

  
  return (
    <div className='CarritoCustom'>
      <div className='CardContainerProducts'>      
      <CartElements />
      </div>
      <CartTotal />
    </div>
  )
}

export default Carrito;