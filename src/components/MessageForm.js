import React, { useState } from 'react';
import { callApi } from './util';
import { useParams, useHistory } from 'react-router';


 const MessageForm = ({token}) => {
    const [content, setContent] = useState('')
    const {postId} = useParams();
    const history = useHistory()
    const handleComment = async (event) => {
        event.preventDefault();
        const url = `/posts/${postId}/messages`

        const data = await callApi({
            method: 'POST',
            url,
            token,
            body: {
                message: {
                    content
                }
            }
        }) 
        history.push('../posts')
    }

    return <>
        <form onSubmit={handleComment}>
            <input type='text' placeholder='Type your message here...' value={content} onChange={(event) => setContent(event.target.value)}></input>
            <button type='submit'>Send</button>
        </form>
        </>
 }

export default MessageForm;