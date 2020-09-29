import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Logo from "./Logo";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const size = {
      fontSize: 35,
    };
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Logo />
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={size}>
              Home
            </Nav.Link>
            <Nav.Link href="#features" style={size}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" style={size}>
              Pricing
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
