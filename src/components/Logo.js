import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic from "./../assets/Petron_Logo.png";

class Logo extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={pic} alt="myPic" className="logo-css" rounded />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Logo;
