import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, FormText, FormFeedback
} from 'reactstrap';
import App from './App';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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

    onFormSubmit = event => {
        event.preventDefault();
        if((this.state.email=='')|(this.state.password=='')){
            alert('Please check your input fields');
        }
        else{
        axios.post('/api/signin', null, {
            params: {
                email: this.state.email,
                password: this.state.password,
            }
        })
        .catch((err)=>{
            alert(err)
        })
        .then(response=>{
            this.props.history.push(`home?${this.state.email}`);
                
        }
        )
    }
}

    render() {
        return <div><App />
            <br /><br />
            <Card style={{
                width: "40%",
                verticalAlign: 'center',
                margin: 'auto',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B',
                horizontalAlign: 'center'
            }}>
                <CardHeader style={{ backgroundColor: '#CD853F', color: 'white' }}><strong>Sign in</strong></CardHeader>

                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="email" style={{color: 'white'}}>Email</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="email" name="email" id="email" value={this.state.email} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" style={{color: 'white'}} >Password</Label>
                            <Input onChange={this.handleInputChange} style={{ width: "100%" }} type="password" name="password" id="password" value={this.state.password} required />
                        </FormGroup>
                        <Button style={{
                        verticalAlign: 'center',
                        margin: 'auto',
                        padding: 10,
                        display: 'block',
                        horizontalAlign: 'center', 
                        backgroundColor: "#7F3F98"
                    }} type="submit" onClick={this.onFormSubmit}>Sign in</Button>
                    </Form>
                </CardBody>
            </Card>
        </div >
    }
}
