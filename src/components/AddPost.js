import React, { useState }from 'react';
import { callApi } from './util';


 const AddPost = ({token}) => {
     const [item, setItem] = useState('')
     const [description, setDescription] = useState('')

     const handleAdd = async (ev) => {
        ev.preventDefault();
        console.log({item, description})
        const addPostResp = await callApi({
            url: '/posts', 
            method: 'POST', 
            token, 
            body:{
                post:{
                    item, 
                    description}
                }})
        console.log('addPostResp:', addPostResp)
        console.log(token)
     }

    return <>
    <div>Add Post</div>
    <form onSubmit={handleAdd}>
        <input type='text' placeholder='Item Name' value={item} onChange= {(event) => setItem(event.target.value)}></input>
        <input type='text' placeholder='Item Description' value={description} onChange= {(event) => setDescription(event.target.value)}></input>
        <button type='submit'>Add Post</button>
    </form>
    </>
}

export default AddPost;