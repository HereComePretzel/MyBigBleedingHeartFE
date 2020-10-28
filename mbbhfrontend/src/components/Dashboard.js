import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {currentUser} from '../actions/auth'

class Dashboard extends React.Component{

    componentDidMount(){
        const token = localStorage.getItem('myAppToken')
        if(!token) {
            this.props.history.push('/login')
        } else {
            const reqObj = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            fetch('http://localhost:3000/api/v1/current_user', reqObj)
            .then(resp => resp.json())
            .then(data => {
                if (data.error){
                    this.props.history.push('/login')
                } else {
                    this.props.currentUser(data)
                }
            })
        }


    }

    render(){
        return (
            <div>
                Dashboard Page
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
    currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)