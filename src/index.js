import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import {
    AccountForm,
    Posts,
    Profile,
    Home,
    AddPost,
    MessageForm
  } from './components';

  const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/'
  

const App = () => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState([])
  console.log('token: ', token)
  console.log('user: ', user)
  useEffect(() => {
    try{
      const fetchPosts = async () => {
          const resp = await fetch(`${baseURL}/posts`);
          const data = await resp.json();
          console.log('fetchLog:', data)
          setPosts(data.data.posts) 
      }
      fetchPosts();
    }
      
      catch (error) {
          console.error(error);
        }
  }, [token])
        
      console.log('newPosts: ', posts)
    return <>
      <div id='container'>
        <header className = 'header'>
          <h1>Stranger's Things</h1>
          <div id='navbar' className='navbar'>
              <Link to='/'>Home</Link> | <Link to='/account/register'>Register</Link> | <Link to='/account/login'>Login</Link> | <Link to='/posts'>Posts</Link> | {token ? <Link to='/profile'>Profile</Link> : ''}
          </div>
          </header>
          <div id='main-section'>
            <Route exact path='/'>
              <Home username={user.username}/>
            </Route>
          <Route exact path='/posts'>
            <AddPost token={token} setPosts={setPosts}/>
            <Posts token={token} setPosts={setPosts} posts={posts}/>
          </Route>
          <Route exact path='/profile'>
            <Profile token={token} user={user}/>
          </Route>
          <Route exact path='/account/:method'>
            <AccountForm setToken={setToken} setUser={setUser}/>
          </Route>
          <Route exact path='/comment/:postId'>
            <MessageForm token={token}/>
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