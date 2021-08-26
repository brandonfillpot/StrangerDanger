import React, { useState, useEffect } from 'react';

const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT'

 const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`${baseURL}/posts`);
            const data = await resp.json();
            setPosts(data.data.posts)    
        }
        fetchPosts()
    }, [])
    console.log('posts: ', posts)
  return <>
    <h1 className='title'>
    Posts
    </h1> 
    <div className='content'>
    {
        posts.map(post => <><h3 key={post._id}>
         {post.title}
        </h3>
        <div>
         {post.description}
        </div></>)
    }
    </div>
    </>
 }
export default Posts;