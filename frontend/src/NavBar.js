import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        const { classes } = this.props;
        return <div> <Navbar color="primary" dark expand ="md">
            <NavbarBrand href = "/">CricFantasy</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className = "ml-auto" navbar>
                    <NavItem>
                        <NavLink href = "/signin">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "/register">Register</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
                 </Navbar>   
            </div>
    }
}

 