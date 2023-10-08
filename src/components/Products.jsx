import React, { useContext } from 'react';
import { dataContext } from './context/DataContext';
import { Link } from 'react-router-dom';
import '../components/styles/Products.css'

const Products = () => {
  const { data, cart, setCart, setSelectedPizza } = useContext(dataContext);

  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  const selectPizza = (product) => {
    setSelectedPizza(product);
  };

  return data.map((product) => (
    <div className='card' key={product.id}>
      <Link to='/pizza' onClick={() => selectPizza(product)}>
        <img className='chakaopizza' src={product.img} alt="imagen" />
      </Link>
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <button onClick={() => buyProducts(product)} className='Custombtn'>
        Agregar al carrito
      </button>
    </div>
  ));
};

export default Products;
