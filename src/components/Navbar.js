import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {
HashRouter,
Switch,
Route
} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

// importing logo.png

import logo from '../navlogo/logo.png';

class NavBar extends Component {
    render() {
        return (
            <HashRouter basename="/Home">
                <div>
                    <Navbar bg="dark" variant="dark" fixed>
                        <Container>
                        <Navbar bg="dark" className="navbar-dark">
                        <Container>
                        <Navbar.Brand href="/home">
                        <img src={logo} width="50" height="50" className="d-inline-block align-top"
                            alt="React Bootstrap logo" href="/home"/>
                        </Navbar.Brand>
                        <Navbar.Brand href="/home" className="me-auto" class="navbar-brand">M.MORA</Navbar.Brand>
                        </Container>
                    </Navbar>
                        <Nav className="ml-auto, navbar">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div>

                    

                    <Switch>
                    
                    
                    <Route exact path="/about" render={ () => <About title='About' /> } />

                    
                    <Route exact path="/contact" render={ () => <Contact title='Contact' /> } />


                    <Route exact path="/" component={Home} />

                    

                    </Switch>    
                </div>
            </HashRouter>
        );
    }
}

  

export default NavBar;