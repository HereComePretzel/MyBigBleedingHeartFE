import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showPost } from '../actions/posts'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class ShowPost extends React.Component {

  componentDidMount(){
    this.props.showPost(this.props.match.params.id)
  }


    
  
  render(){
    const editLink = `/dashboard/edit/${this.props.posts.id}`
      return(
          <div>
              <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{this.props.posts[0].created_at}</Card.Title>
    <Card.Text>
    
        number = {this.props.posts[0].number}<br></br>
        good thoughts = {this.props.posts[0].good_thoughts}<br></br>
        bad thoughts = {this.props.posts[0].bad_thoughts}<br></br>
        suicidal thoughts = {String(this.props.posts[0].suicidal_thoughts)}<br></br>
        meds taken = {String(this.props.posts[0].meds_taken)}<br></br>
        goals = {this.props.posts[0].goals}<br></br>
        notes = {this.props.posts[0].notes}<br></br>
        happy memory = {this.props.posts[0].happy_memory}<br></br>
    </Card.Text>
    <Link to={editLink}><Button variant="primary">Edit</Button></Link>
    </Card.Body>
        </Card>
  </div>
)}
}


  const mapStateToProps = (state) => {
    return {
    posts: state.posts,
    auth: state.auth
    }
}

const mapDispatchToProps = {
    showPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)