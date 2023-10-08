import React, { useContext } from 'react'
import { dataContext } from './context/DataContext'

const CartTotal = () => {

    const {cart} = useContext (dataContext);

    const total = cart.reduce((acc,elemento) => acc + elemento.price, 0)

  return (
    <div className='cartTotal'>

        <h3>Total : ${total} </h3>

    </div>
  )
}

export default CartTotal