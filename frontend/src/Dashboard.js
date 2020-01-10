import React, { Component, useState } from 'react';
import LoginNavBar from './LoginNavBar';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Table, Nav, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import axios from 'axios';




export default class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      teamdata: [], 
      Name: '',
      Notes: '', 
      Id: 0, 
      type: '', 
      team: '', 
      squadData: [], 
      team_name: '', 
      teamName: [], 
      playingXI: []
    };
    // this.onAdd.bind(this)
    
    
  }
  
  componentDidMount(props){
    axios.get('api/getTeams')
    .then(response=>response.data)
    .then(json=> this.setState({teamName: json}))
    axios.post('/api/squadByTeam', null, {
      params: {
        team_name: 'Kej XI'
      }
    })
    .then(response=>response.data)
    .then(json=> this.setState({squadData: json}))

    axios.post('/api/XIbyTeam', null, {
      params: {
        team_name: 'Kej XI'
      }
    })
    .then(response=>response.data)
    .then(json=> this.setState({playingXI: json}))
  }
  
  
  onTeam(event){
    axios.post('/api/squadByTeam', null, {
      params: {
        team_name: event.target.dataset['teamname']
      }
    })
    .then(response=>response.data)
    .then(json=> this.setState({squadData: json}))
  }
  onXi(event){
    axios.post('/api/XIbyTeam', null, {
      params: {
        team_name: event.target.dataset['teamname']
      }
    })
    .then(response=>response.data)
    .then(json=> this.setState({playingXI: json}))
  }

 
  render() {
    var onTeam = (event)=>this.onTeam(event)
    var onRemoval = (event)=>this.onRemoval(event)
    var teamnames = this.state.teamName;
    var onXI = (event)=>this.onXi(event)
    var teamrows = teamnames.map(function(teamnames){
      return (
        <DropdownItem onClick = {onTeam} data-teamname = {teamnames}>{teamnames}</DropdownItem>
      )
    });
    var teamnames2 = this.state.teamName;
    var teamrows2 = teamnames2.map(function(teamnames2){
      return (
        <DropdownItem onClick = {onXI} data-teamname = {teamnames2}>{teamnames2}</DropdownItem>
      )
    });
    var playingxi = this.state.playingXI
        var xirows = playingxi.map(function(playingxi){
            return (<tr>
                <td style = {{color: "white"}}>{playingxi.name}</td>
                <td style = {{color: "white"}}>{playingxi.type}</td>
                <td style = {{color: "white"}}>{playingxi.notes}</td>
                <td style = {{color: "white"}}>{playingxi.team}</td>
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
        
      </tr>
      )
    })
    
      
    
    return <div><LoginNavBar />
        <Row>
        <Col sm = "6">
            <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B'
                
            }}>

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>Squad by teams</strong></CardHeader>

                <CardBody>
                <Table style = {{marginBottom: "-5%"}}>
      <thead>
        <tr>
          
          <th style = {{color: "white"}}>Name</th>
          <th style = {{color: "white"}}>Type</th>
          <th style = {{color: "white"}}>Notes</th>
          <th style = {{color: "white"}}><Nav><UncontrolledDropdown nav inNavbar>
              <DropdownToggle style = {{color: "white", marginBottom: "-10%", marginLeft: "-17px"}}  nav caret>
                Team
          </DropdownToggle><DropdownMenu>{teamrows}</DropdownMenu></UncontrolledDropdown></Nav></th>
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
            <Col>
            <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B'
                
            }}>

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>Playing XI by teams</strong></CardHeader>

                <CardBody>
                <Table style = {{marginBottom: "-5%"}}>
      <thead>
        <tr>
          
          <th style = {{color: "white"}}>Name</th>
          <th style = {{color: "white"}}>Type</th>
          <th style = {{color: "white"}}>Notes</th>
          <th style = {{color: "white"}}><Nav><UncontrolledDropdown nav inNavbar>
              <DropdownToggle style = {{color: "white", marginBottom: "-10%", marginLeft: "-17px"}}  nav caret>
                Team
          </DropdownToggle><DropdownMenu>{teamrows2}</DropdownMenu></UncontrolledDropdown></Nav></th>
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
        <style>{'body { background-color: black; }'}
        </style>
    </div>

          
  }
}


