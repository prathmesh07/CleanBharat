import React from 'react'
import fa from "../images/fa.png"
import { Nav,Navbar} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";
import '../App.css';

import {Link, BrowserRouter as Router} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Router>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="bg" variant="dark" >
            <img
      className="logo"
     src={fa}
     
      alt="First slide"
    />&nbsp;
                <Navbar.Brand   href="/"><h4>CleanBharat</h4></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      </Nav>
                    <Nav>
                     <Nav.Link   href="/"><h6>Home</h6></Nav.Link>
                      <Nav.Link   href="/news"><h6>News</h6></Nav.Link>
                     <Nav.Link  href="/team"><h6>Team</h6></Nav.Link>
      
                      </Nav>
             </Navbar.Collapse>
            </Navbar>
            </Router>
        </div>
    )
}
