import React from 'react'
// import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class Profile extends React.Component{

    render(){
        return (
            <div>
                <Form>
  <Form.Group controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username"/>
  </Form.Group>
  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"/>
  </Form.Group>
  <Form.Group controlId="confirmpassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="password"/>
  </Form.Group>
  <Form.Group controlId="name">
    <Form.Label>*Name</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>
  <Form.Group controlId="Birthday">
    <Form.Label>*Birthday</Form.Label>
    <Form.Control type="password"/>
  </Form.Group>
  <Form.Group controlId="Age">
    <Form.Label>*Age</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>
  <Form.Group controlId="Gender ID">
    <Form.Label>*Gender ID</Form.Label>
    <Form.Control type="password" placeholder="M/F/Non-binary" />
  </Form.Group>
  <Form.Group controlId="Sexual Orientation">
    <Form.Label>*Sexual Orientation</Form.Label>
    <Form.Control type="password" placeholder="gay, straight, pan..." />
  </Form.Group>
  <Form.Group controlId="Zipcode">
    <Form.Label>*Zipcode</Form.Label>
    <Form.Control type="password" placeholder="ex. 11111" />
  </Form.Group>
  <Button>Join!</Button>
</Form>
            </div>
        )
    }
}



export default connect(null, null)(Profile)