import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fakeLogout } from '../../actions/auth';

import './Navegacion.css';



export const Navegacion = (  ) => { 
  
  const dispatch =useDispatch();

  function handleLogout( e ){
      console.log(e)
      dispatch( fakeLogout() )
  }

  return (
        <>
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
                    <span style={{ color: "white" }} className="nav-link">
                         Bienvenido Javier
                    </span>
                  </Nav.Link>
                  <Nav.Link className="nav-item">
                    <Link className="nav-link" to="/app/perfil" >
                      Perfil
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-item">
                    <Button className="nav-link btn" id="btn-logout" onClick={ handleLogout } >
                        Salir     
                    </Button>      
                  </Nav.Link>             
             </Nav>
            </Navbar.Collapse>
           </Container>
          </Navbar>
           
        </>
    )
}
