import React, { useContext } from 'react'
import { dataContext } from './context/DataContext'
import '../components/styles/cartTotal.css'
const CartTotal = () => {

    const {cart} = useContext (dataContext);

    const total = cart.reduce((acc,elemento) => acc + elemento.price, 0)

  return (
  

        <h3>Total : ${total} </h3>

  )
}

export default CartTotal