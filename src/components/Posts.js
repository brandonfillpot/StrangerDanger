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
  return <>
    <h1>
    Posts
    </h1> 
    {
        posts.map(post => <div key={post.id}>
         {post.title}
        </div>)
    }
    </>
 }
export default Posts;