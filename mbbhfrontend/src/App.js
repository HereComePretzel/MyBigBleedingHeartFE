import './App.css';
import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch'
import NewPost from './components/NewPost'
import Navbar from './components/Navbar'
import EmailForm from './components/EmailForm'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
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
