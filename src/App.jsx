import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Carrito from './components/Carrito'
import DataProvider from './components/context/DataContext'
import Pizzas from './components/Pizzas'
function App() {


  return (
    <>

    <DataProvider>
    <BrowserRouter>  
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path="pizza" element={<Pizzas/>}/>
      <Route path='car' element={<Carrito/>}/>
    </Routes>
    </BrowserRouter>
    </DataProvider>


    </>
  )
}

export default App
