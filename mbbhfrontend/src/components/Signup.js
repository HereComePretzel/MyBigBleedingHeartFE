import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { newUser } from '../actions/users'
import { currentUser } from '../actions/auth'

class Signup extends React.Component{
  state = {
    username: '',
    password: '',
    email: ''
  }
  // componentDidMount(){
  //   const token = localStorage.getItem('myAppToken')
  //   if(!token) {
  //       this.props.history.push('/login')
  //   } else {
  //       const reqObj = {
  //           method: 'GET',
  //           headers: {
  //               'Authorization': `Bearer ${token}`
  //           }
  //       }
  //       fetch('http://localhost:3000/api/v1/current_user', reqObj)
  //       .then(resp => resp.json())
  //       .then(data => { 
  //           if (data.error){
  //               this.props.history.push('/login')
  //           } else {
  //               this.props.currentUser(data)
  //               this.setState({
  //                 user_id: data.id
  //               })
              

  //           }
  //       })
  //   }}
  

  

  addUser = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    console.log(this.state)
    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(user => {

      this.props.history.push('/dashboard')
      this.props.newUser(user)
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

    render(){
        return (
            <div>
                <form className='newcontainer' onSubmit={this.addUser}>
        <h1 className='titletext'>Username</h1>
          <input name='username' className='titlebox' onChange={this.handleChange} value={this.state.username}/>
          <h2 className='titletext'>Password</h2>
          <textarea name='password' className='titlebox' onChange={this.handleChange} value={this.state.password}/>
          <h2 className='titletext'>Email</h2>
          <textarea name='email' className='titlebox' onChange={this.handleChange} value={this.state.email}/>
          <br></br>
          <input className='addbutton' type='submit' value='Sign Up' />
        </form>
                {/* <Form onSubmit={this.addUser} style={{width:'50%'}} className="mx-auto">
  <Form.Group controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control type="input" name='username' onChange={this.handleChange} value={this.state.username}/>
  </Form.Group>
  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' onChange={this.handleChange} value={this.state.password}/>
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name='email' onChange={this.handleChange} value={this.state.email}/>
  </Form.Group>
  <Button type="submit" >Join!</Button>
</Form> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    notes: state.notes,
    posts: state.posts
  }
}

const mapDispatchToProps = {
  newUser,
  currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
