import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import LandingPage from './Components/LandingPage';

const App = () => <div> 
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/register" exact component={RegisterPage} />
    <Route path="/landing" exact component={LandingPage} />
    </div>

export default App;