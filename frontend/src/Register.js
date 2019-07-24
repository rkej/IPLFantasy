import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import axios from 'axios';
import App from './App';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            teamName: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    onFormSubmit=event=>{
        event.preventDefault();
        var user = new URLSearchParams();
        user.append('email', this.state.email);
        user.append('password', this.state.password);
        user.append('firstName', this.state.firstName);
        user.append('lastName', this.state.lastName)
        user.append('teamName', this.state.teamName);
        axios.post('/api/register', user)
    }
    render() {
        return <div><App />
            <br />
            <Card style={{
                width: "40%",
                verticalAlign: 'center',
                margin: 'auto',
                padding: 5,
                display: 'block',
                backgroundColor: '#FFAB91',
                horizontalAlign: 'center'
            }}>

                <CardHeader style={{ backgroundColor: '#FF1744', color: 'white' }}><strong>Register</strong></CardHeader>

                <CardBody>
                    <Form onSubmit={this.onFormSubmit}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="text" name="firstName" id="firstName" value={this.state.firstName} required/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="lastName" >Last Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="text" name="lastName" id="lastName" value={this.state.lastName} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="teamName" >Team Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="text" name="teamName" id="teamName" value={this.state.teamName} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email" >Email</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="email" name="email" id="email" value={this.state.email} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" >Password</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="password" name="password" id="password" value={this.state.password} required />
                        </FormGroup>
                    </Form>
                    <Button color="primary" style={{
                        verticalAlign: 'center',
                        margin: 'auto',
                        padding: 10,
                        display: 'block',
                        horizontalAlign: 'center'
                    }} type="submit" onClick={this.onFormSubmit}>Register</Button>

                </CardBody>
            </Card>
        </div>
    }
}
