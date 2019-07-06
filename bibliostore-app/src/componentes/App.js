import React from 'react';
import Imagen from './Imagen';
import './../css/App.css';

function App() {
  return (
    <div className="App">
      <h1>Desde Componente App.js</h1>
      { /* ***** Componente: Imagen ***** */}
      <Imagen></Imagen>
    </div>
  );
}

export default App;
