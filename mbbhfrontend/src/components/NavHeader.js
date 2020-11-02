import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutSuccess } from '../actions/auth'
import { logoutPostsSuccess} from '../actions/posts'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

class NavHeader extends React.Component{

    handleLogout = () => {
        localStorage.removeItem('myAppToken')
        this.props.logoutSuccess()
    }

    render(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">MyBigBleedingHeart</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="..." id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <Link to='/login'><NavDropdown.Item  href="#action/3.4">Logout</NavDropdown.Item></Link>
      </NavDropdown>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Link to='/login'><Button className='ui button' onClick={() => {
            this.props.logoutSuccess(); 
            this.props.logoutPostsSuccess()}}>Logout</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        posts: state.posts
    }
}

const mapDispatchToProps = {
    logoutSuccess,
    logoutPostsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)