import React, { useContext } from 'react'
import { dataContext } from './context/DataContext'
import '../components/styles/CartElements.css'

const CartElements = () => {

    const {cart} = useContext (dataContext)
  return cart.map((product)=> {
    return(
        <div className='cartContent' key={product.id}>
            <img src={product.img} alt="product-card" />
            <h3>{product.name}</h3>
            <p className='pcustomcart'>{product.ingredients}</p>
            <h4>{product.price}$</h4>

        </div>
    )
  })
  

  
}

export default CartElements