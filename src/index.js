import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {
    AccountForm,
    Posts,
    Profile
  } from './components';

  const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT'

const App = () => {
    return <>
      <div id='container'>

          <div id='navbar'>
              <Link to='/account/register'>Register</Link> 
              <Link to='/account/login'>Login</Link> 
              <Link to='/posts'>Posts</Link>
              <Link to='/profile'>Profile</Link>
          </div>

          <div id='main-section'>
          <Route exact path='/posts'>
            <Posts />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/account/:method'>
            <AccountForm />
          </Route>
      </div>
      </div>
    </>

        
    
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),

);