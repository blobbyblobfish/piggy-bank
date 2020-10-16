//import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import logo from '../images/logoImage.png'
import './Home.css';

// import Login from '../components/login';
// import SignUp from '../components/signup';

export default class Home extends Component {
  render() {
    return (
      <div className = "home-div">
        <div className = "home-container">
        <img src={logo} alt="Logo" />
            <div className = "login-signup-div">
              <NavLink className = "loginButton" to="/login">Login</NavLink>
              <NavLink className = "signUpButton" to="/signup">Sign Up</NavLink>
          </div>
         </div>
      </div>
    )
  }
}

