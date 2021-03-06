import React, { useState, useEffect } from 'react';

import { callApi } from './util';

const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users'


 const Profile = ({token, user}) => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
            const fetchUserData = async () => {
                const userResp = await fetch(`${baseURL}/me`, {
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    }
                })
            const userProfile = await userResp.json() 
            console.log('userData2:', userProfile)
            setUserData(userProfile.data.messages)
            console.log('profile:', userData)
            }
            fetchUserData()
        }, [token])
    return <>
        <h1 className='title'>
            Messages
        </h1> 
        <div>
            <h3>Recieved Messages</h3>
            {  
                userData.map(message => user._id !== message.fromUser._id ? <> 
                <div className='messageR'>
                    <div>A message from {message.fromUser.username} about your item '{message.post.title}'</div>
                    <div>Details: {message.content}</div>
                </div>
                </> : '') 
            }
        </div>
        <div>
            <h3>Sent Messages</h3>
            {   
                userData.map(message => user._id === message.fromUser._id ? <> 
                <div className='messageS'>
                    <div>About: '{message.post.title}'</div>
                    <div>Details: {message.content}</div>
                </div>
                </> : '') 
            }
        </div>
    </>
}

export default Profile;