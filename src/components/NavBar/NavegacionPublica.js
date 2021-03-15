import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavegacionPublica = () => {
  return (
    <Navbar className="nav-bar-digital-board" id="text-nav" expand="lg" >
    <Container>
     <Navbar.Brand>
         <Link className="navbar-brand" to="/">
           Digital Board
         </Link>
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-nabvar-nav"  />
     <Navbar.Collapse id="basic-nabvar-nav" className="justify-content-end">
     <Nav className="mr-auto">             
           <Nav.Link className="nav-item">
           <Link 
              className="nav-link" 
              to="/nosotros" >
                Nosotros
              </Link>
           </Nav.Link>
           <Nav.Link className="nav-item">
           <Link 
              className="nav-link" 
              to="/contacto" >
                Contacto
              </Link>
           </Nav.Link>
           <Nav.Link className="nav-item">
           <Link 
                className="nav-link" 
                to="/login" >
                  Inicio de sesión
                </Link>  
           </Nav.Link>             
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  )
}
