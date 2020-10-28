import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Profile extends React.Component{

    render(){
        return (
            <div>
                <Navbar />
                Profile Page
            </div>
        )
    }
}

export default Profile