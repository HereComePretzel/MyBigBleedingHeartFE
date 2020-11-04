import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NavHeader from './NavHeader'
import {currentUser} from '../actions/auth'
import { fetchPostsSuccess } from '../actions/posts'
import PostCard from './PostCard'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import NewPost from './NewPost'
// import { LineChart, Line } from 'recharts';
import Graph from './Graph'
// import EmailForm from './EmailForm'
// import EditPost from './EditPost'
// import ShowPost from './ShowPost'
// import {Switch, Route} from 'react-router-dom'
// import Dashboard from './Dashboard'
import PieRechartComponent from './PieChart'
import Calendar2 from './Calendar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalComp from './ModalComp'
import Calendar3 from './Scheduler'


class DashboardContainer extends React.Component{
    state = {
        posts: []
    }
    // componentDidMount(){
        // const token = localStorage.getItem('myAppToken')
        // if(!token) {
        //     this.props.history.push('/login')
        // } else {
        //     const reqObj = {
        //         method: 'GET',
        //         headers: {
        //             'Authorization': `Bearer ${token}`
        //         }
        //     }
        //     fetch('http://localhost:3000/api/v1/current_user', reqObj)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         if (data.error){
        //             this.props.history.push('/login')
        //         } else {
        //             this.props.currentUser(data)
        //         }
        //     })
    //     }
        componentDidMount(){
        fetch(`http://localhost:3000/posts`)
        .then(resp => resp.json())
        .then(posts => {
            const userPosts = posts.filter(post => post.user.id === this.props.auth.id)
            this.props.fetchPostsSuccess(userPosts)
            this.setState({
                posts: posts
            })
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
                <NavHeader />
                        <Calendar3 posts={this.state.posts}/>
                <Container>
                    <Row>
                        <PieRechartComponent posts={this.state.posts}/>
                            <Graph posts={this.state.posts}/>

                    </Row>

                
                {/* {this.renderPosts()} */}
                <Link to="/new"><Button>Happy Memory</Button></Link>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth,
        users: state.users
    }
}

const mapDispatchToProps = {
    currentUser,
    fetchPostsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)