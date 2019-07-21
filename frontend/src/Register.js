import React, {Component} from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import App from './App';

export default class SignIn extends Component {

    render() {
        return <div><App/>
            <br/>
            <Card style={{
                width: "40%",
                verticalAlign: 'center',
                margin: 'auto',
                padding: 5,
                display: 'block',
                backgroundColor: '#FFAB91',
                horizontalAlign: 'center'
            }}>
                
                    <CardHeader><strong>Register</strong></CardHeader>
                
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                                <Input style={{width: "100%"}} type="text" name="firstName" id="firstName" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName" >Last Name</Label>
                                <Input style={{width: "100%"}} type="text" name="lastName" id="lastName" required/>
 
                        </FormGroup>
                        <FormGroup>
                            <Label for="teamName" >Team Name</Label>
                                <Input style={{width: "100%"}} type="text" name="teamName" id="teamName" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" >Email</Label>
                                <Input style={{width: "100%"}} type="email" name="email" id="email" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" >Password</Label>
                                <Input style={{width: "100%"}} type="password" name="password" id="password" required/>
                        </FormGroup>
                        <Button color="primary" style={{
                            verticalAlign: 'center',
                            margin: 'auto',
                            padding: 10,
                            display: 'block',
                            horizontalAlign: 'center'
                        }}>Register</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    }
}
