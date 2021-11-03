import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

// importing logo.png

import logo from '../navlogo/logo.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

class NavBar extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="/home">
                        <img src={logo} width="50" height="50" className="d-inline-block align-top"
                            alt="React Bootstrap logo" href="/home"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto, navbar">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>

                    

                    <Switch>
                    
                    
                    <Route path="/About">
                        <About />
                    </Route>

                    
                    <Route path="/Contact">
                        <Contact />
                    </Route>


                    <Route path="/">
                        <Home />
                    </Route>

                    

                    </Switch>    
                </div>
            </BrowserRouter>
        );
    }
}

  

export default NavBar;