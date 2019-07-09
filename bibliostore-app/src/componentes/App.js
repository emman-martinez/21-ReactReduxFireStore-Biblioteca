import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Suscriptores
import Suscriptores from './suscriptores/Suscriptores';
import MostrarSuscriptor from './suscriptores/MostrarSuscriptor';
import EditarSuscriptor from './suscriptores/EditarSuscriptor';
import NuevoSuscriptor from './suscriptores/NuevoSuscriptor';
// Layout
import Navbar from './layout/Navbar';
// Raíz
import Imagen from './Imagen';
// CSS
import './../css/App.css';

function App() {
  return (
    <Router>
      { /* ***** Componente: Navbar ***** */}
      <Navbar></Navbar> 
        <div className="container">
          <Switch>
            <Route exact path="/suscriptores" component={Suscriptores}></Route>
            <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor}></Route>
            <Route exact path="/suscriptores/:id" component={MostrarSuscriptor}></Route>
            <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor}></Route>
          </Switch>
        </div>
      { /* ***** Componente: Imagen ***** */}
      <Imagen></Imagen>
    </Router>
  );
}

export default App;
