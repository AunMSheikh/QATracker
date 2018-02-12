import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginForm from './Components/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import LandingScreen from './Components/LandingScreen';

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <Switch>
    <Route path="/" component={LoginForm}/>
    <Route path="/LandingScreen" component={LandingScreen}/>
  </Switch>
  </MuiThemeProvider>
);

export default Main;