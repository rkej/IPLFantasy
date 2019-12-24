import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardBody,
     Form, FormGroup, Label, Input
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
        if((this.state.email=='')|(this.state.password=='')|(this.state.firstName=='')|(this.state.lastName=='')|(this.state.teamName=='')){
            alert('Please check your input fields');
        }
        else{
        axios.post('/api/register', null, {
            params: {
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                teamName: this.state.teamName
            }
        })
        .then(response=>{
            alert(response.data);
        }
        )
    }
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
                backgroundColor: '#2E353B',
                horizontalAlign: 'center'
            }}>

                <CardHeader style={{ backgroundColor: '#CD853F', color: 'white' }}><strong>Register</strong></CardHeader>

                <CardBody>
                    <Form onSubmit={this.onFormSubmit}>
                        <FormGroup>
                            <Label for="firstName" style={{color: 'white'}}>First Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="text" name="firstName" id="firstName" value={this.state.firstName} required/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="lastName" style={{color: 'white'}}>Last Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="text" name="lastName" id="lastName" value={this.state.lastName} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="teamName" style={{color: 'white'}}>Team Name</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="text" name="teamName" id="teamName" value={this.state.teamName} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email" style={{color: 'white'}}>Email</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="email" name="email" id="email" value={this.state.email} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" style={{color: 'white'}}>Password</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="password" name="password" id="password" value={this.state.password} required />
                        </FormGroup>
                    <Button style={{
                        verticalAlign: 'center',
                        margin: 'auto',
                        padding: 10,
                        display: 'block',
                        horizontalAlign: 'center', 
                        backgroundColor: "#7F3F98"
                    }} type="submit" onClick={this.onFormSubmit}>Register</Button>
                                        </Form>


                </CardBody>
            </Card>
        </div>
    }
}
