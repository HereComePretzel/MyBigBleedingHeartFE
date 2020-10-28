import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutSuccess} from '../actions/auth'

class Navbar extends React.Component{

    handleLogout = () => {
        localStorage.removeItem('myAppToken')
        this.props.logoutSuccess()
    }

    render(){
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)