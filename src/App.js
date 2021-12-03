import React from 'react';
import Header from './components/header/Header';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import Cart from './components/Container/Cart';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route 
              path='/' 
              element={
                  <ItemListContainer text='Your favorite sneakers resell page. Fully confident and 100% hype. &#128293;' 
                  />
            }/>

            <Route 
              path='/category/:categoryId' 
              element={
                  <ItemListContainer text='Your favorite sneakers resell page. Fully confident and 100% hype. &#128293;' 
                  />
            }/>

            <Route 
              path='/item/:id' 
              element={
                  <ItemDetailContainer />
            }/>

            <Route 
              path='/category/:categoryId/item/:id' 
              element={
                  <ItemDetailContainer />
            }/>

            <Route 
              path='/cart' 
              element={
                  <Cart />
            }/>

          </Routes> 
        </div>
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;
