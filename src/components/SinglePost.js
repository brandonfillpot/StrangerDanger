import React from 'react';

const SinglePost = ({post}) => {
  return post 
    ? <div>
        <h3 key={post._id}>
        {post.title}
        </h3>
        <div>
        {post.description}
        </div>
    </div>    
    : 'Loading...'
}

export default SinglePost;
