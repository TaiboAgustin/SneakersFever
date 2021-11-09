import React from 'react';
import Header from './components/header/Header';
import ItemListContainer from './components/Container/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer text='Welcome to the page. Still in Development fase'/>
    </div>
  );
}

export default App;
