//import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react'
// import ExploreContainer from '../components/ExploreContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css';

import Login from '../components/login';
import SignUp from '../components/signup';

export default class Home extends Component {
  render() {
    return (

      <Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <h1> Welcome to the Piggy-Bank </h1>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav list-group">
              <li className="nav-item list-group-item">
                <Link className="nav-link" to={"/log-in"}>Login</Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/log-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>

      
      // <div>
      //   <br></br>
      //   <SignUp/>
      //   <br />
      //   <Login />
      // </div>
    )
  }
}
