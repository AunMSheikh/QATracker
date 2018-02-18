import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import LoginPage from './Components/LoginPage';

const App = () => <div> 
    <Route path="/" exact component={Homepage} />
    <Route path="/login" exact component={LoginPage} />
    </div>

export default App;