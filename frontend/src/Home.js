import React, { Component } from 'react';
import LoginNavBar from './LoginNavBar';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Table, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import axios from 'axios';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      CSKdata: [],
      DCdata: [],
      KKRdata: [],
      KXIPdata: [],
      MIdata: [],
      RCBdata: [],
      RRdata: [],
      SRHdata: []
    };
  }
  componentDidMount(){
    axios.get('/api/getCSKData')
    .then(response => response.data)
    .then(json => this.setState({CSKdata: json}));
    
    axios.get('/api/getDCData')
    .then(response => {
      alert(response.data);
      this.DC = response.data;
    })
    axios.get('/api/getKKRData')
    .then(response => {
      alert(response.data);
      this.KKR = response.data;
    })
    axios.get('/api/getKXIPData')
    .then(response => {
      alert(response.data);
      this.KXIP = response.data;
    })
    axios.get('/api/getMIData')
    .then(response => {
      alert(response.data);
      this.MI = response.data;
    })
    axios.get('/api/getRCBData')
    .then(response => {
      alert(response.data);
      this.RCB = response.data;
    })
    axios.get('/api/getRRData')
    .then(response => {
      alert(response.data);
      this.RR = response.data;
    })
    axios.get('/api/getSRHData')
    .then(response => {
      alert(response.data);
      this.SRH = response.data;
    })
  }

  render() {
    var CSK = this.state.CSKdata
    var CSKrows = CSK.map(function(csk){
      return (<tr>
      <td>{csk.name}</td>
      <td>{csk.type}</td>
      <td>{csk.notes}</td>
      <Button color="success" style={{marginTop: "25%", marginBottom: "25%"}}>Add</Button>
    </tr>)
    });
    
      
    
    return  <div>
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
export default Home;