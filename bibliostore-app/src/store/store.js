import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Custom Reducers
import buscarUsuarioReducer from './../reducers/buscarUsuarioReducer';

// Configurar firestore
const firebaseConfig = {
    apiKey: "AIzaSyAOccivJ6gGZZrMmUxb9_YbMDWq9Arem_s",
    authDomain: "bibliostore-774aa.firebaseapp.com",
    databaseURL: "https://bibliostore-774aa.firebaseio.com",
    projectId: "bibliostore-774aa",
    storageBucket: "bibliostore-774aa.appspot.com",
    messagingSenderId: "4431804865",
    appId: "1:4431804865:web:a7d2be54449e7d56"
}

// Inicializar firebase
firebase.initializeApp(firebaseConfig);

// Configuración de React-Redux
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// Crear el enhacer con compose en redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    usuario: buscarUsuarioReducer
})

// state inicial
const initialState = {};

// Create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase), 
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
));
  
export default store;    