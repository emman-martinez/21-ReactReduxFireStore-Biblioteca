import React from 'react';
import logo from './../img/logo.svg';
import reduxLogo from './../img/reduxLogo.svg';
import fireBaseLogo from './../img/fbLogo.svg';

const Imagen = () => {
    return(
        <div className="">
            <div className="cajaPadre">
                <div className="caja uno">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="caja dos">
                    <h1 className="tamaño">ReactJS</h1>
                </div>
            </div>
            <div className="cajaPadre">
                <div className="caja uno">
                    <h1 className="tamañoR">Redux</h1>
                </div>
                <div className="caja dos">
                    <img src={reduxLogo} className="App-logo2" alt="reduxLogo" />
                </div>
            </div>
            <div className="cajaPadre">
                <div className="caja uno">
                    <img src={fireBaseLogo} className="" alt="fireBaseLogo" />
                </div>
            </div>
        </div>
    );
};

export default Imagen;