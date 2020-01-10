import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Badge,
    NavLink } from 'reactstrap';

export default class LoginNavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false, 
        };
      }
      toggle(props) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return <div> <Navbar style = {{backgroundColor: "#7F3F98"}} dark expand ="md">
            <NavbarBrand href = "/dashboard">CricFantasy</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className = "ml-auto" navbar>
                    <NavItem>
                        <NavLink href = "/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem><NavLink href = "/score">Score  <Badge style = {{fontSize: "50%"}}>beta</Badge></NavLink></NavItem>
                    <NavItem>
                        <NavLink href = "/rules">Rules</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "/">Logout</NavLink>
                    </NavItem>
                </Nav> 
            </Collapse>
                 </Navbar>
            </div>
    }
}