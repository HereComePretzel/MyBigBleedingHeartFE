import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const HomeCard = props => {
  const showLink = `/show/${props.postObj.id}`
  
    return(
//   <Item.Group className='center'>
//     <Item>
//       <Icon name='thumbtack' size='large' corner='bottom right' color='brown'/>

//       <Item.Content >
//         <Item.Header style={{color: '#FFA500'}} as='a'>{props.noteObj.title}</Item.Header>
//         <Item.Description style={{color: '#FFA500'}}>{props.noteObj.body}</Item.Description>
//         <Item.Extra>
//         <Link to={showLink}><Button>
//             View
//             <Icon name='right chevron' />
//           </Button></Link>
//         </Item.Extra>
//       </Item.Content>
//     </Item>
//   </Item.Group>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{props.postObj.created_at}</Card.Title>
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
    <Link to={showLink}><Button variant="primary">Go somewhere</Button></Link>
    </Card.Body>
</Card>


    )
}



export default connect(null, null)(HomeCard)

