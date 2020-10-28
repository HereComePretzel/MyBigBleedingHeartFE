import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'
import Button from 'react-bootstrap/Button'
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
    <div className='logincontainer'>
        <h3 className='signintext'>My Big Bleeding Heart</h3>
        {this.state.error && <h4 style={{color:'red'}}>{this.state.error}</h4>}
        <form onSubmit={this.handleSubmit}>
          <input className='loginbox' name={'username'} onChange={this.handleInputChange} value={this.state.username}/><br></br>
          <input className='loginbox' name={'password'} onChange={this.handleInputChange} value={this.state.password}/>
          <input className='loginbutton' type='submit' value='login' />
        </form>
        <Button variant='primary'>Buttstrap</Button>
      </div>
    )
  }


}

const mapDispatchToProps = {
  loginSuccess
}
  export default connect(null, mapDispatchToProps)(Login)