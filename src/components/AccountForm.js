import React, { useState } from 'react';
import { useParams } from 'react-router';


 const AccountForm = () => {
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const params = useParams();
     const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/register'
     console.log(baseURL)
    return <> 
    <p>Login/Register</p>
    <form onSubmit={async (event) => {
    event.preventDefault();

    const resp = await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    });
    const data = await resp.json()
    console.log(data)

    }}>
        <input type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}></input>
        <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'>Submit</button>
    </form>
    </>
}

export default AccountForm;