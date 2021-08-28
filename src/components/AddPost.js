import React, { useState }from 'react';
import { callApi } from './util';

const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT'

 const AddPost = ({token, setPosts}) => {
     const [title, setTitle] = useState('')
     const [description, setDescription] = useState('')
     const [price, setPrice] = useState('')

     const handleAdd = async (ev) => {
        ev.preventDefault();
        console.log({title, description, price})
        const addPostResp = await callApi({
            url: '/posts', 
            method: 'POST', 
            token, 
            body:{
                post:{
                    title, 
                    description,
                    price
                }
                }
            })
        console.log('addPostResp:', addPostResp)
        const postResp = await callApi({url: '/posts', token});
        console.log('postResp: ', postResp)
        setPosts(postResp.data.posts);
     }

    return <>
    <div>Add Post</div>
    <form onSubmit={handleAdd}>
        <input type='text' placeholder='Item Name' value={title} onChange= {(event) => setTitle(event.target.value)}></input>
        <input type='text' placeholder='Item Description' value={description} onChange= {(event) => setDescription(event.target.value)}></input>
        <input type='text' placeholder='Item Price' value={price} onChange= {(event) => setPrice(event.target.value)}></input>
        <button type='submit'>Add Post</button>
    </form>
    </>
}

export default AddPost;