import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import Main from './theme';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import LandingScreen from './Components/LandingScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider>
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to the Q.T</h1>
              </header>
              <Main />
              <footer className="App-footer">
                <h6>Developed and managed by Aun ;)</h6>
              </footer>
            </div>
          </MuiThemeProvider>
        </div>

      </Router>
    );
  }
}

export default App;
