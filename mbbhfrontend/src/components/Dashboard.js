import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './NavHeader'
import {currentUser} from '../actions/auth'
import { fetchPostsSuccess } from '../actions/posts'
import PostCard from './PostCard'

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

        fetch(`http://localhost:3000/posts`)
        .then(resp => resp.json())
        .then(posts => {
            console.log(posts)
            const userPosts = posts.filter(post => post.user.id === this.props.auth.id)
            this.props.fetchPostsSuccess(userPosts)
        })
    }

    renderPosts = () => {
        return this.props.posts.map(postObj => {
            return <PostCard postObj={postObj} key={postObj.id}/>
        })
    }


    render(){
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    currentUser,
    fetchPostsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)