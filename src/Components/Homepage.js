import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Message } from 'semantic-ui-react';
import '../Styles/Homepage.css';
import '../Styles/Global.css';


const Homepage = () => <div className={["ui container"]}>
        <Grid.Row>
            <Grid.Column>
                <Message success className={['center-content', 'message-jumbotron']}>
                    <h1 className={'title'}> Welcome to QT </h1>
                    <h4 className={'hook'}> Comprehensive QA tool build for all your QA needs! </h4>
                    <div className={'button-pair'}>
                        <div className={'button-left-wrapper'}><Button primary as={Link} to="/login" className={'button-left'}> Login </Button></div>
                        <div className={'button-right-wrapper'}><Button primary as={Link} to="/register" className={'button-right'}> Register </Button></div>
                    </div>
                </Message>
            </Grid.Column>
        </Grid.Row>
    </div>

export default Homepage;