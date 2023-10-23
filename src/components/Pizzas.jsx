import React, { useContext } from 'react';
import { dataContext } from './context/DataContext';
import '../components/styles/Pizzas.css'
import { Link } from 'react-router-dom';

const Pizzas = () => {
  const { selectedPizza } = useContext(dataContext);

  if (!selectedPizza) {
    return <p>Selecciona una pizza</p>;
  }

  const { name, ingredients, img } = selectedPizza;

  return (
    <div className='Fathercardpizzas'>            
      <div className='cardpizzas'>
        <Link to={"/"}><button className='Goback'>Volver</button></Link>
     
        <img src={img} alt="imagen" />
        <h2>{name}</h2>    
        <p>{ingredients}</p>
      </div>
    </div>
  );
};

export default Pizzas;
