import React from 'react';
import './App.css';
import Details from './components/Details/Details';
import Shoe from './components/Shoe/Shoe';

function App() {
  return (
    <div className='app'>
      <div className='app__cont'>
        <Shoe />
        <Details />
      </div>
    </div>
  );
}

export default App;
