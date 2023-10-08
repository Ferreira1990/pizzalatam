import React, { useContext } from 'react';
import { dataContext } from './context/DataContext';
import '../components/styles/Pizzas.css'

const Pizzas = () => {
  const { selectedPizza } = useContext(dataContext);

  if (!selectedPizza) {
    return <p>Selecciona una pizza</p>;
  }

  const { name, ingredients, img } = selectedPizza;

  return (
    <div className='Fathercardpizzas'>
      <div className='cardpizzas'>
        <img src={img} alt="imagen" />
        <h2>{name}</h2>
        <p>{ingredients}</p>
      </div>
    </div>
  );
};

export default Pizzas;
