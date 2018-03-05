import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

const App = () => <div> 
    <Route path="/" exact component={Homepage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/register" exact component={RegisterPage} />
    </div>

export default App;