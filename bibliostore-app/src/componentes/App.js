import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// store
import store from './../store/store';
import { Provider } from 'react-redux';
// Libros
import EditarLibro from './libros/EditarLibro';
import Libros from './libros/Libros';
import MostrarLibro from './libros/MostrarLibro';
import NuevoLibro from './libros/NuevoLibro';
import PrestamoLibro from './libros/PrestamoLibro';
// Suscriptores
import Suscriptores from './suscriptores/Suscriptores';
import MostrarSuscriptor from './suscriptores/MostrarSuscriptor';
import EditarSuscriptor from './suscriptores/EditarSuscriptor';
import NuevoSuscriptor from './suscriptores/NuevoSuscriptor';
// Auth
import Login from './auth/Login';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './../helpers/auth';
// Layout
import Navbar from './layout/Navbar';
// Raíz
import Imagen from './Imagen';
// CSS
import './../css/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        { /* ***** Componente: Navbar ***** */}
        <Navbar></Navbar> 
          <div className="container">
            <Switch>
              { /* ***** Libros ***** */ }
              <Route exact path="/" component={UserIsAuthenticated(Libros)}></Route>
              <Route exact path="/libros/mostrar/:id" component={UserIsAuthenticated(MostrarLibro)}></Route>
              <Route exact path="/libros/nuevo" component={UserIsAuthenticated(NuevoLibro)}></Route>
              <Route exact path="/libros/editar/:id" component={EditarLibro}></Route>
              <Route exact path="/libros/prestamo/:id" component={UserIsAuthenticated(PrestamoLibro)}></Route>
              { /* ***** Suscriptores ***** */ }
              <Route exact path="/suscriptores" component={UserIsAuthenticated(Suscriptores)}></Route>
              <Route exact path="/suscriptores/nuevo" component={UserIsAuthenticated(NuevoSuscriptor)}></Route>
              <Route exact path="/suscriptores/mostrar/:id" component={UserIsAuthenticated(MostrarSuscriptor)}></Route>
              <Route exact path="/suscriptores/editar/:id" component={UserIsAuthenticated(EditarSuscriptor)}></Route>
              { /* ***** Auth ***** */ }
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)}></Route>
            </Switch>
          </div>
        { /* ***** Componente: Imagen ***** */}
        <Imagen></Imagen>
      </Router>
    </Provider>
  );
}

export default App;
