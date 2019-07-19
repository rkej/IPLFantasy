import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import App from './App';

export default class SignIn extends Component {

    render() {
        return<div> <App />
        <br/><br/>
                <Card style={{width:"48%", verticalAlign: 'center', margin: 'auto', padding: 10, display: 'block', backgroundColor: '#FF8A80', horizontalAlign: 'center'}}>
                    <CardHeader>Sign in</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="password" />
                                </Col>
                            </FormGroup>
                            <Button color="primary" style={{ verticalAlign: 'center', margin: 'auto', padding: 10, display: 'block', horizontalAlign: 'center'}}>Sign in</Button>
                        </Form>
                    </CardBody>
                    
                </Card>
                </div>
    }
}


