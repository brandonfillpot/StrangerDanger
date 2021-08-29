import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';



 const AccountForm = ({setToken, setUser}) => {
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const params = useParams();
     const history = useHistory();
     const baseURL = 'https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users'
     
     console.log('params.method: ', params.method)
    
    return <> 
    <p>Login/Register</p>
    <form onSubmit={async (event) => {
        event.preventDefault(); 
        
       try{ const resp = await fetch(`${baseURL}/${params.method}`, {
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
        })
            const data = await resp.json()
            console.log('data:', data)
            const token = data.data.token
            setToken(token)
            if(data){
                const userResp = await fetch(`${baseURL}/me`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }})
                const userData = await userResp.json()  
                setUser(userData.data)
                console.log('userData:', userData)
                history.push('/')
            }
       } 
        catch(error) {
            console.error(error)
        }
    
    }}>
        <input type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}></input>
        <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'>Submit</button>
    </form>
    </>
}

export default AccountForm;