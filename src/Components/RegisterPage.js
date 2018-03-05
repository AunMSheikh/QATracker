import React, { Component } from 'react';
import { Container, Button, Form , Message } from 'semantic-ui-react';
import '../Styles/LoginPage.css';
import '../Styles/Global.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container className={'center-container'}>
                <h1 className={'center-content'}>Register For QT </h1>
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
                        <Form.Field> 
                             <label htmlFor="confirmPassword"> Confirm Password </label>
                             <input placeholder='Confirm Password' type={'Password'}/> 
                        </Form.Field>
                        <Form.Field> 
                             <label htmlFor="companyid"> Company ID </label>
                             <input placeholder='Company ID'/> 
                        </Form.Field>
        
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Message>
            </Container>
        );
    }
}

export default RegisterPage;