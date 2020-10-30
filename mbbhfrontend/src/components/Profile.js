import React from 'react'
// import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Profile extends React.Component{

    render(){
        return (
            <div>
                {/* <NavHeader /> */}
                Profile Page
            </div>
        )
    }
}


export default connect(null, null)(Profile)