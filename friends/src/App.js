import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Friend from './components/Friend';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/friends">Friend List</Link></li>
          <li><Link to="/makefriend">Make A Friend</Link></li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends" component={Friend} />
          <PrivateRoute path="/makefriend" component={AddFriendForm} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;