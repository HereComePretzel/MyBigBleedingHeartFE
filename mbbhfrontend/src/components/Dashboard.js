import '../App.css';
import React from 'react';
import NavHeader from './NavHeader'
import App from '../App.js'
import NewPost from './NewPost'
import EmailForm from './EmailForm'
import EditPost from './EditPost'
import ShowPost from './ShowPost'
import {Switch, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import { currentUser } from '../actions/auth'
import { connect } from 'react-redux'
import Profile from './Profile'
import DashboardContainer from './DashboardContainer'


class Dashboard extends React.Component {

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

render() {
  return (
    <div>
      <Switch>
        <Route exact path='/dashboard' component={DashboardContainer}/>
        <Route path='/dashboard/edit/:id' component={EditPost} />
        <Route path='/dashboard/new' component={NewPost} />
        <Route path='/dashboard/email' component={EmailForm} />
        <Route path='/dashboard/show/:id' component={ShowPost}/>
        <Route path='/dashboard/profile' component={Profile}/>
        <Route path='*' component={NoMatch} />
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = {
    currentUser
}


export default connect(null, mapDispatchToProps)(Dashboard)
