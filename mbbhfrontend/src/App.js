import './App.css';
import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DashboardContainer from './components/DashboardContainer';
// import NoMatch from './components/NoMatch'
import NavHeader from './components/NavHeader'
// import NewPost from './components/NewPost'
// import EmailForm from './components/EmailForm'
// import Edit from './components/EditPost'
// import ShowPost from './components/ShowPost'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        {/* <Route path='/edit/:id' component={Edit} />
        <Route path='/new' component={NewPost} />
        <Route path='/email' component={EmailForm} />
        <Route path='/show/:id' component={ShowPost}/>  */}
        {/* <Route path='*' component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

export default App;
