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
    this.state = {
      data: []
    };
  
    
  }
  
  componentDidMount(){
    axios.get('/api/getCSKData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onCSK = event => {
    event.preventDefault();
    axios.get('/api/getCSKData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onDC = event => {
    event.preventDefault();
    axios.get('/api/getDCData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onKKR = event => {
    event.preventDefault();
    axios.get('/api/getKKRData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onKXIP = event => {
    event.preventDefault();
    axios.get('/api/getKXIPData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onMI = event => {
    event.preventDefault();
    axios.get('/api/getMIData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onRCB = event => {
    event.preventDefault();
    axios.get('/api/getRCBData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
    
  }
  onRR = event => {
    event.preventDefault();
    axios.get('/api/getRRData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
  }
  onSRH = event => {
    event.preventDefault();
    axios.get('/api/getSRHData')
    .then(response => response.data)
    .then(json => this.setState({data: json}));
}


  render() {
    
    var CSK = this.state.data
    var CSKrows = CSK.map(function(csk){
      return (<tr>
      <td>{csk.name}</td>
      <td>{csk.type}</td>
      <td>{csk.notes}</td>
      <td>{csk.team}</td>
      <Button color="success" style={{marginTop: "25%", marginBottom: "25%"}}>Add</Button>
    </tr>)
    });
    
      
    
    return <div>
        <LoginNavBar />
        <Row>
      <Col sm="5">
      <Card style={{
                margin: '10px',
                padding: 5,
                display: 'block',
                backgroundColor: 'yellow'
                
            }}>

                <CardHeader style={{ backgroundColor: 'blue', color: 'white' }}><strong>Chennai Super Kings</strong></CardHeader>

                <CardBody>
                <Table>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Type</th>
          <th>Notes</th>
          <th><Nav><UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick = {this.onCSK}>
                  CSK
                </DropdownItem>
                <DropdownItem onClick = {this.onDC}>
                  DC
                </DropdownItem>
                <DropdownItem> onClick = {this.onKKR}
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


