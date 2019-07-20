import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import App from './App';

export default class Register extends Component {
    render() {
        const { classes } = this.props;
        return <div> 
            <App /> 
            <br/><br/>
                <Card style={{width:"60%", verticalAlign: 'center', margin: 'auto', padding: 10, display: 'block', backgroundColor: '#FF8A80', horizontalAlign: 'center'}}>
                    <CardHeader>Register</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup row>
                                <Label for="firstName" sm={2}>First Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="firstName" id="firstName" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastName" sm={2}>Last Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="lastName" id="lastName" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="teamName" sm={2}>Team Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="teamName" id="teamName" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="password" required/>
                                </Col>
                            </FormGroup>
                            <Button color="primary" style={{ verticalAlign: 'center', margin: 'auto', padding: 10, display: 'block', horizontalAlign: 'center'}}>Register</Button>
                        </Form>
                    </CardBody>
                </Card>
  
        </div>
    }
}
