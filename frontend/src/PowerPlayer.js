import React, { Component, useState } from 'react';
import LoginNavBar from './LoginNavBar';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Table, Nav, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import axios from 'axios';

export default class PowerPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.location.search.substr(1),
            powerPlayer: [], 
            playingXI: []
        }
    }
    componentDidMount(){
        axios.post('api/getPowerPlayer', null, {
            params: {
              email: this.state.email, 
              powerPlayer: [],
              
            }
          })
          .then(response=>response.data)
          .then(json=> this.setState({powerPlayer: json}))
        axios.post('api/getPlaying11', null, {
            params: {
                email: this.state.email
            }
        })
        .then(response=>response.data)
          .then(json=> this.setState({playingXI: json}))
    }
    onSquad = event => {
        event.preventDefault();
        this.props.history.push(`home?${this.state.email}`)
    }
    onAdd(event){
        axios.post('/api/addPowerPlayer', null, {
         params: {
           Id: event.target.dataset['id2']
         }
       })
       .then(
           axios.post('api/getPlaying11', null, {
               params: {
                   email: this.state.email
               }})
               .then(response=>response.data)
            .then(json=> this.setState({playingXI: json}))
           )
        axios.post('api/getPowerPlayer', null, {
         params: {
           email: this.state.email
         }
         
       })
       .then(response=>response.data)
       .then(json=> this.setState({powerPlayer: json}))
       axios.post('api/getpowerPlayer', null, {
         params: {
           email: this.state.email
         }
       })
       .then(response=>response.data)
       .then(json=> this.setState({powerPlayer: json}))
     }
     onRemoval(event){
       axios.post('/api/RemovePowerPlayer', null, {
         params: {
           Id: event.target.dataset['id2']
         }
       }).then(
        axios.post('api/getPowerPlayer', null, {
         params: {
           email: this.state.email
         }
       })
       .then(response=>response.data)
       .then(json=> this.setState({powerPlayer: json})))
       axios.post('api/getPlaying11', null, {
        params: {
            email: this.state.email
        }
    })
        .then(response=>response.data)
     .then(json=> this.setState({playingXI: json}))
    
     }
     onPP =event => {
         event.preventDefault();
         this.props.history.push(`powerplayer?${this.state.email}`)
     }
     OnPlaying = event => {
        this.props.history.push(`playing11?${this.state.email}`)
      }
    render(){
        var onadd = (event)=>this.onAdd(event)
        var onRemoval = (event)=>this.onRemoval(event)
        var playingxi = this.state.playingXI
        var xirows = playingxi.map(function(playingxi){
            return (<tr>
                <td style = {{color: "white"}}>{playingxi.name}</td>
                <td style = {{color: "white"}}>{playingxi.type}</td>
                <td style = {{color: "white"}}>{playingxi.notes}</td>
                <td style = {{color: "white"}}>{playingxi.team}</td>
                <Button data-id2 = {playingxi.id} color="primary" style={{marginTop: "25%", marginBottom: "25%"}} color="primary" onClick = {onadd}>Select</Button>
                </tr>
          )
        })
        var pp = this.state.powerPlayer
        var ppRows = pp.map(function(pp){
        return (<tr>
            <td style = {{color: "white"}}>{pp.name}</td>
            <td style = {{color: "white"}}>{pp.type}</td>
            <td style = {{color: "white"}}>{pp.notes}</td>
            <td style = {{color: "white"}}>{pp.team}</td>
            <Button data-id2 = {pp.id} color="secondary" style={{marginTop: "25%", marginBottom: "25%"}} onClick = {onRemoval}>Change</Button>
            </tr>
      )
    })
        return <div><LoginNavBar/><style>{'body { background-color: black; }'}
        </style>
        &nbsp; &nbsp;<Button color = "info" outline style = {{marginTop: "10px"}} onClick = {this.OnPlaying}>Back to Playing XI</Button>
        <Row>
        <Col sm = "6">
            <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B'
                
            }}>

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>Playing 11</strong></CardHeader>

                <CardBody>
                <Table style = {{marginBottom: "-5%"}}>
      <thead>
        <tr>
          
          <th style = {{color: "white"}}>Name</th>
          <th style = {{color: "white"}}>Type</th>
          <th style = {{color: "white"}}>Notes</th>
          <th style = {{color: "white"}}>Team</th>
            </tr>
            </thead>
            <tbody>
              {xirows}
            </tbody>
            <br/>
            </Table>
            </CardBody>
            </Card>
            </Col>
            <Col sm = "6">
            <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B'
                
            }}>

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>Power Player</strong></CardHeader>

                <CardBody>
                <Table style = {{marginBottom: "-5%"}}>
      <thead>
        <tr>
          
          <th style = {{color: "white"}}>Name</th>
          <th style = {{color: "white"}}>Type</th>
          <th style = {{color: "white"}}>Notes</th>
          <th style = {{color: "white"}}>Team</th>
            </tr>
            </thead>
            <tbody>
              {ppRows}
            </tbody>
            <br/>
            </Table>
            </CardBody>
            </Card>
            </Col>
            </Row>
        </div>
    }
}