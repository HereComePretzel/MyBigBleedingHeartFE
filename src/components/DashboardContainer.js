import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import NavHeader from './NavHeader'
import {currentUser} from '../actions/auth'
import { fetchPostsSuccess } from '../actions/posts'
import PostCard from './PostCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Graph from './Graph'
import PieRechartComponent from './PieChart'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalComp from './ModalComp'
import Calendar5 from './Calendar5'
import HMModal from './HMModal'



class DashboardContainer extends React.Component{
    state = {
        posts: []
    }

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
                        <ModalComp history={this.props.history}/>
                        <Container>
                        <Calendar5 history={this.props.history} posts={this.state.posts}/>
                        <HMModal props={this.state.props}/>
                        <PieRechartComponent posts={this.state.posts}/>
                        </Container>
                        
                        <Graph posts={this.state.posts}/>
                        
                        <CardColumns >
                            <Container class='col-2'>

                    {this.renderPosts()}

                            </Container>
                     

                    </CardColumns>
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