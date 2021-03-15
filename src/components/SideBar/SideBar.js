import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './sidebar.css'

export const SideBar = () => {
    return (
        <Accordion className="sidebar">
            <Card.Header>
                <Accordion.Toggle as={ Button } variant="link" eventKey="0">
                    Servicio
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                     <Link className="nav-link" to="/app/grupos" >
                      Grupos
                    </Link>
                    <Link className="nav-link" to="/app/publicadores" >
                         Publicadores
                    </Link>
                </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
                <Accordion.Toggle as={ Button } variant="link" eventKey="1">
                    Registro
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                   <Link  className="nav-link" to="/app/grupos" >
                        Publicadores
                   </Link>                   
                   <Link  className="nav-link" to="/app/grupos" >
                        Usuarios
                   </Link>                   
                </Card.Body>
            </Accordion.Collapse>
          
        </Accordion>
    )
}

   
                 