import React from "react";
import "bootstrap";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import './login.css';
import { useFormik } from "formik";

const { Group, Control } = Form;
const { Body } = Card;



export const Login = () => {
  
  const formik = useFormik( {
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: ( value ) => alert( JSON.stringify( value ))
  });
 
  return (
    <>
      <Row className="main-center">
        <Col lg={ 6 }>
        <Card  id="login-card">
          <Body>
            <Form onSubmit={ formik.handleSubmit }>
              {/**Email */}
              <Group className="mb-3" controlId="formBasicEmail">
                <h4>Email</h4>
                <Control 
                type="email" 
                placeholder="Tu email"
                name="email"
                onChange={ formik.handleChange }
                value={ formik.values.email }
                />
              </Group>
              <Group controlId="formBasicPassword">
                <h4>Contraseña</h4>
                <Control  
                type="password" 
                placeholder="*****"
                name="password"
                onChange={ formik.handleChange }
                value={ formik.values.password }
                />
              </Group>
              <Button 
              type= "submit"  
              className="mt-3">
                    Login
              </Button>
            </Form>
          </Body>
        </Card>
        </Col>
      </Row>

    
    </>
  );
};
