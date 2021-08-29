import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { callApi } from './util'
import { SinglePost } from './'
import MessageForm from './MessageForm';

 const Posts = ({token, posts, setPosts}) => {
     const handleDelete = async (postId) => {
        const respObj = await callApi({
          method: 'DELETE',
          url: `/posts/${postId}`,
          token
        });
        const postResp = await callApi({url: '/posts', token});
        setPosts(postResp.data.posts);
      }
    
  return <>
    <h1 className='title'>
    Posts
    </h1> 
    <div className='content'>
    {
        posts.map(post => <>
        <div key={post._id} className='singlePost'>
            <h3>
                {post.title}
            </h3>
            <div>
                <div><b>Description: </b>{post.description}</div>
                <h4 className='price'>Price: {post.price}</h4>
            </div>
            {
              post.isAuthor ?  <button onClick={() => handleDelete(post._id)}>Delete</button> : <button><Link to={`/comment/${post._id}`}>Comment</Link></button>
            }    
        </div>    
        </>)
    }
    </div>
    </>
 }
export default Posts;