import React, { PureComponent } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import '../Styles/loginForm.css';
import colors from '../Styles/colors';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from 'react-router-dom'
import LandingScreen from './LandingScreen';


class LoginForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            emailHint: true,
            passwordHint: true,
            login: false,
        }
    }

    signIn = () => {
        this.setState({ login: true })
    
    }

    render() {
        if(this.state.login) {
            return (
                <Redirect  to={{pathname: '/LandingScreen'}} />
            )
        }
        return (
            <div className="container">
                <Card>
                    <CardTitle title="LOGIN" titleColor={colors.titleWhite}/>
                    <form className="login-form">
                        <TextField className="text-input" type={"text"} hintText={'Email'} floatingLabelText={this.state.emailHint ? 'Email' : ''} hintStyle={{ color: colors.backgroundGrey}} floatingLabelStyle={{ color: '#fff'}}
                        underlineFocusStyle={{ color: colors.steelBlue }} underlineShow={true} underlineStyle={{ color: '#000'}}/>
                        <br />
                        <br />
                        <TextField className="text-input" hintText={'Password'} type={"password"} floatingLabelText={this.state.passwordHint ? 'Password' : ''}  hintStyle={{ color: 'rgb(218, 216, 216)'}} floatingLabelStyle={{ color: '#fff'}} underlineFocusStyle={{ color: colors.steelBlue }}/>
                        <br />
                        <br />
                        <br />
                        <FlatButton backgroundColor={colors.cyan} label={"Sign in"} hoverColor={colors.steelBlue} onClick={() => {this.signIn()}} />
                    </form>
                </Card>
                
            </div>
            
        )
    }

}

export default LoginForm;
