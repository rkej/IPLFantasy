import React, { Component, useState } from 'react';
import LoginNavBar from './LoginNavBar';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Table, Nav, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import axios from 'axios';

export default class TeamPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.location.search.substr(1),
            squadData: [], 
            playingXI: []
        }
    }
    componentDidMount(){
        axios.post('api/getSquadData', null, {
            params: {
              email: this.state.email, 
              squadData: [],
              
            }
          })
          .then(response=>response.data)
          .then(json=> this.setState({squadData: json}))
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
        axios.post('/api/addPlaying11', null, {
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
        axios.post('api/getSquadData', null, {
         params: {
           email: this.state.email
         }
         
       })
       .then(response=>response.data)
       .then(json=> this.setState({squadData: json}))
       axios.post('api/getSquadData', null, {
         params: {
           email: this.state.email
         }
       })
       .then(response=>response.data)
       .then(json=> this.setState({squadData: json}))
     }
     onRemoval(event){
       axios.post('/api/RemovePlaying11', null, {
         params: {
           Id: event.target.dataset['id2']
         }
       }).then(
        axios.post('api/getSquadData', null, {
         params: {
           email: this.state.email
         }
       })
       .then(response=>response.data)
       .then(json=> this.setState({squadData: json})))
       axios.post('api/getPlaying11', null, {
        params: {
            email: this.state.email
        }
    })
        .then(response=>response.data)
     .then(json=> this.setState({playingXI: json}))
    
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
                <Button data-id2 = {playingxi.id} color="success" style={{marginTop: "25%", marginBottom: "25%"}} color="danger" onClick = {onRemoval}>Remove</Button>
                </tr>
          )
        })
        var squad = this.state.squadData
        var squadRows = squad.map(function(squad){
        return (<tr>
            <td style = {{color: "white"}}>{squad.name}</td>
            <td style = {{color: "white"}}>{squad.type}</td>
            <td style = {{color: "white"}}>{squad.notes}</td>
            <td style = {{color: "white"}}>{squad.team}</td>
            <Button data-id2 = {squad.id} color="success" style={{marginTop: "25%", marginBottom: "25%"}} onClick = {onadd}>Add</Button>
            </tr>
      )
    })
        return <div><LoginNavBar/><style>{'body { background-color: black; }'}
        </style>
        &nbsp; &nbsp;<Button color = "info" onClick = {this.onSquad} outline>Change your squad</Button>
        <Row>
        <Col sm = "6">
            <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B'
                
            }}>

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>Your team</strong></CardHeader>

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
              {squadRows}
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

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>Your Playing 11</strong></CardHeader>

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
            </Row>
        </div>
    }
}