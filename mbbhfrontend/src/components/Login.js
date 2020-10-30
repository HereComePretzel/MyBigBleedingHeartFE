import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'


class Login extends React.Component {
  state = {
      username: '',
      password: '',
      error: null
    
  }

  handleInputChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
          localStorage.setItem('myAppToken', data.token)
        this.props.loginSuccess(data)
        this.props.history.push('/Dashboard')
      }
    })

  }

render() {
  return (
      
<Form onSubmit={this.handleSubmit}>
{this.state.error && <h4 style={{color:'orange'}}>{this.state.error}</h4>}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control name={'username'} value={this.state.username} onChange={this.handleInputChange}style={{width: 300}}type="username" placeholder="Enter username" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name={'password'} value={this.state.password} onChange={this.handleInputChange} style={{width: 300}} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to='/signup'><Button variant="primary" type="submit">
    Sign Up
  </Button></Link>
</Form>
    )
  }


}

const mapDispatchToProps = {
  loginSuccess
}
  export default connect(null, mapDispatchToProps)(Login)