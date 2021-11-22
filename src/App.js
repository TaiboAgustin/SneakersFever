import React from 'react';
import Header from './components/header/Header';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer text='Welcome to the page. Still in Development fase'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
