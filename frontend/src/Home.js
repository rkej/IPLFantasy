import React, { Component } from 'react';
import LoginNavBar from './LoginNavBar';
import axios from 'axios';


class Home extends Component {
  render() {
    axios.get('/api/getCSKData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getDCData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getKKRData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getKXIPData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getMIData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getRCBData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getRRData')
    .then(response => {
      alert(response.data);
    })
    axios.get('/api/getSRHData')
    .then(response => {
      alert(response.data);
    })
    return  <div>
        <LoginNavBar />
        <style>{'body { background-color: black; }'}
        </style>
    </div>
    
  }
}
export default Home;