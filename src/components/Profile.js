import React, { useState, useEffect } from 'react';

import { callApi } from './util';

const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users'


 const Profile = ({token}) => {

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
            }
            fetchUserData()
            console.log('profile:', userData)
        }, [token])
    return <>
        <h1 className='title'>
            Messages
        </h1> 
        <div>
            {
                userData.map(message => <>
                <div>A message from {message.fromUser.username} about your item '{message.post.title}'</div>
                <div>Details: {message.content}</div>
                </>)
            }
        </div>
    </>
}

export default Profile;