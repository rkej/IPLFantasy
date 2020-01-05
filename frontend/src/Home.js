import React, { Component, useState } from 'react';
import LoginNavBar from './LoginNavBar';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Table, Nav, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import axios from 'axios';




export default class Home extends Component {
  
  constructor(props){
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      teamdata: [], 
      email: this.props.location.search.substr(1), 
      Name: '',
      Notes: '', 
      Id: 0, 
      type: '', 
      team: '', 
      squadData: []
    };
    // this.onAdd.bind(this)
    
    
  }
  
  componentDidMount(props){
    axios.get('/api/getCSKData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}))
    
    axios.post('api/getSquadData', null, {
      params: {
        email: this.state.email
      }
    })
    .then(response=>response.data)
    .then(json=> this.setState({squadData: json}))
    
  }
  
  onCSK = event => {
    event.preventDefault();
    axios.get('/api/getCSKData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
  }
  onDC = event => {
    event.preventDefault();
    axios.get('/api/getDCData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
  }
  onKKR = event => {
    event.preventDefault();
    axios.get('/api/getKKRData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
  }
  onKXIP = event => {
    event.preventDefault();
    axios.get('/api/getKXIPData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
  }
  onMI = event => {
    event.preventDefault();
    axios.get('/api/getMIData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
  }
  onRCB = event => {
    event.preventDefault();
    axios.get('/api/getRCBData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
    
  }
  onRR = event => {
    event.preventDefault();
    axios.get('/api/getRRData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
  }
  onSRH = event => {
    event.preventDefault();
    axios.get('/api/getSRHData')
    .then(response => response.data)
    .then(json => this.setState({teamdata: json}));
}
 
 onAdd(event){
   axios.post('/api/PlayerToAdd', null, {
    params: {
      email: this.state.email, 
      Id: event.target.dataset['id']
    }
  })
  .then(
   axios.post('api/getSquadData', null, {
    params: {
      email: this.state.email
    }
  })
  .then(response=>response.data)
  .then(json=> this.setState({squadData: json})))
  axios.post('api/getSquadData', null, {
    params: {
      email: this.state.email
    }
  })
  .then(response=>response.data)
  .then(json=> this.setState({squadData: json}))
}
onRemoval(event){
  axios.post('/api/PlayerToRemove', null, {
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
}
OnPlaying = event => {
  event.preventDefault();
  this.props.history.push(`playing11?${this.state.email}`)
}

  render() {
    var onadd = (event)=>this.onAdd(event)
    var onRemoval = (event)=>this.onRemoval(event)
    var CSK = this.state.teamdata;
    var CSKrows = CSK.map(function(csk){
      return (<tr>
      <td style = {{color: "white"}}>{csk.name}</td>
      <td style = {{color: "white"}}>{csk.type}</td>
      <td style = {{color: "white"}}>{csk.notes}</td>
      <td style = {{color: "white"}}>{csk.team}</td>
      <Button data-id = {csk.id} value = {csk.id} color="success" style={{marginTop: "25%", marginBottom: "25%"}} onClick = {onadd}>Add</Button>
    </tr>)
    });
    var squad = this.state.squadData
    var squadRows = squad.map(function(squad){
      return (<tr>
        <td style = {{color: "white"}}>{squad.name}</td>
        <td style = {{color: "white"}}>{squad.type}</td>
        <td style = {{color: "white"}}>{squad.notes}</td>
        <td style = {{color: "white"}}>{squad.team}</td>
        <Button data-id2 = {squad.id} color="danger" style={{marginTop: "25%", marginBottom: "25%"}} onClick = {onRemoval}>Remove</Button>
      </tr>
      )
    })
    
      
    
    return <div><LoginNavBar />
    &nbsp; &nbsp;<Button color = "info" onClick = {this.OnPlaying} outline>See your Playing 11</Button>
        <Row>
      <Col sm="6">
      <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: '#2E353B'
                
            }}>

                <CardHeader style={{ backgroundColor: '#DAA520', color: 'black' }}><strong>IPL SQUADS</strong></CardHeader>

                <CardBody>
                <Table style = {{marginBottom: "-5%"}}>
      <thead>
        <tr>
          
          <th style = {{color: "white"}}>Name</th>
          <th style = {{color: "white"}}>Type</th>
          <th style = {{color: "white"}}>Notes</th>
          <th style = {{color: "white"}}><Nav><UncontrolledDropdown nav inNavbar>
              <DropdownToggle style = {{color: "white", marginBottom: "-10%"}}  nav caret>
                Team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick = {this.onCSK}>
                  CSK
                </DropdownItem>
                <DropdownItem onClick = {this.onDC}>
                  DC
                </DropdownItem>
                <DropdownItem onClick = {this.onKKR}>
                  KKR
                </DropdownItem>
                <DropdownItem onClick = {this.onKXIP}>
                  KXIP
                </DropdownItem>
                <DropdownItem onClick = {this.onMI}>
                  MI
                </DropdownItem>
                <DropdownItem onClick = {this.onRCB}>
                  RCB
                </DropdownItem>
                <DropdownItem onClick = {this.onRR}>
                  RR
                </DropdownItem>
                <DropdownItem onClick = {this.onSRH}>
                  SRH
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </th>
        </tr>
      </thead>
      <tbody>
        {CSKrows}
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
            </Row>
            
        <style>{'body { background-color: black; }'}
        </style>
    </div>

          
  }
}


