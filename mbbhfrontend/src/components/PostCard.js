import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PostCard = props => {
  const showLink = `/dashboard/show/${props.postObj.id}`
  const editLink = `/dashboard/edit/${props.postObj.id}`
  
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{String(props.postObj.date)}</Card.Title>
    <Card.Text>
    
        number = {props.postObj.number}<br></br>
        good thoughts = {props.postObj.good_thoughts}<br></br>
        bad thoughts = {props.postObj.bad_thoughts}<br></br>
        suicidal thoughts = {String(props.postObj.suicidal_thoughts)}<br></br>
        meds taken = {String(props.postObj.meds_taken)}<br></br>
        goals = {props.postObj.goals}<br></br>
        notes = {props.postObj.notes}<br></br>
        happy memory = {props.postObj.happy_memory}<br></br>
    </Card.Text>
    <Link to={editLink}><Button variant="primary">Edit</Button></Link>
    <Link to={showLink}><Button variant="primary">View</Button></Link>
    </Card.Body>
</Card>


    )
}



export default connect(null, null)(PostCard)

