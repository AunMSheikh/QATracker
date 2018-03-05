import React, { Component } from 'react';
import { Container, Button, Form , Message } from 'semantic-ui-react';
import '../Styles/LoginPage.css';
import '../Styles/Global.css';

class LoginPage extends Component {
    state = {  }
    render() {
        return (
            <Container className={'center-container'}>
                <h1 className={'center-content'}>Login To QT </h1>
                <Message>
                    <Form>
                        <Form.Field> 
                            <label htmlFor="email"> Email </label> 
                            <input placeholder='example@example.com' type={'Email'} /> 
                        </Form.Field>
                        <Form.Field> 
                             <label htmlFor="password"> Password </label>
                             <input placeholder='Password' type={'Password'}/> 
                        </Form.Field>
        
                        <Form.Checkbox label='Remember me' />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Message>
            </Container>
        );
    }
}

export default LoginPage;