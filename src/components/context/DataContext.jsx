import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    axios("pizzas.json").then((res) => setData(res.data));
  }, []);

  return (
    <dataContext.Provider value={{ data, cart, setCart, selectedPizza, setSelectedPizza }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
