import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import {Link} from "react-router-dom"

export default class componentName extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Frontend</Nav.Link>
            <Nav.Link href="#pricing">DevOps</Nav.Link>
        </Nav>
        </Navbar>
    )
  }
}


