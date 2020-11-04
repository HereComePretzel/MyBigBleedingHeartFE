import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutSuccess } from '../actions/auth'
import { logoutPostsSuccess} from '../actions/posts'
import { logoutUserSuccess } from '../actions/users'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Button from 'react-bootstrap/Button'


class NavHeader extends React.Component{

    handleLogout = () => {
        localStorage.removeItem('myAppToken')
        this.props.logoutSuccess()
    }

//     render(){
//         return (
//             <div>
//                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">MyBigBleedingHeart</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <NavDropdown title="..." id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <Link to='/login'><NavDropdown.Item  href="#action/3.4">Logout</NavDropdown.Item></Link>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//         <Link to='/login'><Button className='ui button' onClick={() => {
//             this.props.logoutSuccess(); 
//             this.props.logoutPostsSuccess()
//             this.props.logoutUserSuccess()}}>Logout</Button></Link>
//             </div>
//         )
//     }
// }
render() {
    return (
        <div className='nav'>
<Navbar collapseOnSelect style={{background: "#3C4F76"}} expand="lg">
  <Navbar.Brand href="#home">MyBigBleedingHeart</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Link to='/dashboard/profile'><Nav.Link href="#deets">Profile</Nav.Link></Link>
      <Link to='/login' onClick={() => {
            this.props.logoutSuccess(); 
            this.props.logoutPostsSuccess();
            this.props.logoutUserSuccess()}}><Nav.Link Link to='/login'>Logout</Nav.Link></Link>
            
    </Nav>
  </Navbar.Collapse>
</Navbar>
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
    logoutPostsSuccess,
    logoutUserSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)