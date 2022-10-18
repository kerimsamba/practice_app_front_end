import './App.css';
import React from 'react';
import MainContainer from './containers/MainContainer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
    <MainContainer/>
    </BrowserRouter>

  );
}

export default App;
