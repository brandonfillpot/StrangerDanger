import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {
    AccountForm,
    Posts,
    Profile,
    Home,
    AddPost
  } from './components';

  const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/'
  

const App = () => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState('')
  console.log('token: ', token)
  console.log('user: ', user)
    return <>
      <div id='container'>
        <header className = 'header'>
          <h1>Stranger's Things</h1>
          <div id='navbar' className='navbar'>
              <Link to='/'>Home</Link> | <Link to='/account/register'>Register</Link> | <Link to='/account/login'>Login</Link> | <Link to='/posts'>Posts</Link> | <Link to='/profile'>Profile</Link>
          </div>
          </header>
          <div id='main-section'>
            <Route exact path='/'>
              <Home username={user.username}/>
            </Route>
          <Route exact path='/posts'>
            <AddPost token={token}/>
            <Posts token={token}/>
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/account/:method'>
            <AccountForm setToken={setToken} setUser={setUser}/>
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