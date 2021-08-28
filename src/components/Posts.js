import React, { useState, useEffect } from 'react';

import { callApi } from './util'
import { SinglePost } from './'

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
        <div key={post._id}>
            <h3>
                {post.title} ...... {post.price}
            </h3>
            <div>
                {post.description}
            </div>
            {
              post.isAuthor ?  <button onClick={() => handleDelete(post._id)}>Delete</button> : ''
            }    
        </div>    
        </>)
    }
    </div>
    </>
 }
export default Posts;