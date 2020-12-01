import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'

const PostCard = props => {
  const showLink = `/dashboard/show/${props.postObj.id}`
  const editLink = `/dashboard/edit/${props.postObj.id}`
//   const months = [{
//       "January" : 31 
//   },
//   {
//       "February" : 28
//   },
//   {
//       "March" : 31
//   },
//   {
//       "April" : 30
//   },
//   {
//       "May" : 31
//   },
//   {
//       "June" : 30
//   },
//   {
//       "July" : 31
//   },
//   {
//       "August" : 31
//   }, 
//   {
//       "September" : 30
//   },
//   {
//       "October" : 31
//   },
//   {
//       "November" : 30
//   },
//   {
//       "December" : 31
//   }

//   ]

//   const date = new Date().getMonth()
//   console.log(date)
//   const dateIndex = parseInt(props.postObj.date.slice(0, 2))
//   console.log(dateIndex)
//   const showCurrentMonth = (monthIndex) => {
//       return months[monthIndex]
//   }


  
    return(
        <CardColumns>
    <Card className='postcardstyle' style={{ width: '25rem' }}>

    <Card.Body>
    <Card.Title>{String(props.postObj.date)}</Card.Title>
    <Card.Text>
    
        Rating: {props.postObj.number}<br></br>
        {/* good thoughts = {props.postObj.good_thoughts}<br></br>
        bad thoughts = {props.postObj.bad_thoughts}<br></br>
        suicidal thoughts = {String(props.postObj.suicidal_thoughts)}<br></br>
        meds taken = {String(props.postObj.meds_taken)}<br></br>
        goals = {props.postObj.goals}<br></br>
        notes = {props.postObj.notes}<br></br>
        happy memory = {props.postObj.happy_memory}<br></br> */}
    </Card.Text>
    {/* <Link to={editLink}><Button variant='btn btn-warning'>Edit</Button></Link>{' '} */}
    <Link to={showLink}><Button variant='btn btn-warning'>View</Button></Link>
    </Card.Body>
</Card>
</CardColumns>


    )
}



export default connect(null, null)(PostCard)

