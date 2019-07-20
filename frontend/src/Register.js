import React, {Component} from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import App from './App';

export default class SignIn extends Component {

    render() {
        return <div><App/>
            <br/><br/>
            <Card style={{
                width: "30%",
                verticalAlign: 'center',
                margin: 'auto',
                padding: 5,
                display: 'block',
                backgroundColor: '#FF8A80',
                horizontalAlign: 'center'
            }}>
                <strong>
                    <CardHeader>Register</CardHeader>
                </strong>
                <CardBody>
                    <Form style={{width: "120%"}}>
                        <FormGroup row>
                            <Label for="f_name" sm={5}>First Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="f_name" id="f_name" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="l_name" sm={5}>Last Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="l_name" id="l_name" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="t_name" sm={5}>Team Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="t_name" id="t_name" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={5}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={5}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password" required/>
                            </Col>
                        </FormGroup>
                        <Button color="primary" style={{
                            verticalAlign: 'center',
                            margin: 'auto',
                            padding: 10,
                            display: 'block',
                            horizontalAlign: 'center'
                        }}>Sign in</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    }
}
