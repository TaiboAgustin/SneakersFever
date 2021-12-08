import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMORPGSccMCwtyCOREepdnYTfBbKcg690",
    authDomain: "sneakersfever-59f19.firebaseapp.com",
    projectId: "sneakersfever-59f19",
    storageBucket: "sneakersfever-59f19.appspot.com",
    messagingSenderId: "950687611412",
    appId: "1:950687611412:web:f77add4ad04fc2fff10501"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);


