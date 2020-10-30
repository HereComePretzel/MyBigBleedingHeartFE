import './App.css';
import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch'
import NewPost from './components/NewPost'
import NavHeader from './components/NavHeader'
import EmailForm from './components/EmailForm'
import Edit from './components/EditPost'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/signup' component={Signup} />
        <Route path='/new' component={NewPost} />
        <Route path='/email' component={EmailForm} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
