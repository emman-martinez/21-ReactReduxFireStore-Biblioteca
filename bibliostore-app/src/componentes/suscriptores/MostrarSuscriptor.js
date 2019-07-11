import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from './../layout/Spinner';

const MostrarSuscriptor = (props) => {
    // console.log(props);

    if(!props.suscriptor) return <Spinner></Spinner>;

    return( 
        <div className="row">
            <div className="col-md-6 mb-4">
                <Link to="/suscriptores" className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left"></i> {''}
                    Volver al Listado
                </Link>
            </div>
            <div className="col-md-6">
                <Link to={`/suscriptores/editar/${suscriptor.id}`}>  </Link>
            </div>
        </div>
    );
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'suscriptores',
            storeAs: 'suscriptor',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: {ordered} }, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    })) // Consulta de la base de datos
) (MostrarSuscriptor);