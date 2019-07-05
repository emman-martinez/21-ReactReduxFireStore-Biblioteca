import React from 'react';
import logo from './../img/logo.svg';
import reduxLogo from './../img/reduxLogo.svg';

const Imagen = () => {
    return(
        <div className="App centro">
            <div className="centro">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="centro">
                <h1 className="tamaño">ReactJS</h1>
            </div>
            <p className="tamañoR">-</p>
            <p className="tamaño">-</p>
            <div className="centro">
                <h1 className="tamañoR">Redux</h1>
            </div>
            <div className="centro"></div>
            <div className="centro"></div>
            <div className="centro"></div>
            <div className="centro"></div>
            <div className="centro">
                <img src={reduxLogo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
};

export default Imagen;
