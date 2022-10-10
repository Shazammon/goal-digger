import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate } from "react-router-dom"

export default function UserLogin( {curentUser, setCurrentUser}){
    // states for the controlled form
    const [email, setEmail] = useState(" ")
    const [password, setPassword] =useState(" ")
    const [msg, setMsg] = useState(" ")

    // submit login form event handler
    const handleSubmit = async e =>{
        try{
        // post form to backend
            const reqBody ={
                email,
                password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}api-v1/users/login`, reqBody)

            // save the token in local storage
            const { token } = response.data
            localStorage.setItem("jwt", token)
            // decode the token
            const decoded= jwt_decode(token)
            // set the user in app state
            setCurrentUser(decoded)
        }catch(err){
            console.warn(err)
            if(err.response === 400 ){
                    setMsg(err.response.data.msg)
            }
        }
    }
    // conditionally render a navigate component
    if (curentUser){
        return <Navigate to="users/:id" />
    }


    return(
        <div>
            <h1> Login to access your Bucket List </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> Email:</label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = "your email"
                        onChange ={e=> setEmail(e.target.value)}
                        value={email}
                    />
                <label htmlFor="password">Password</label> 
                    <input
                        type = "text"
                        id = "password"
                        placeholder = "enter your password"
                        onChange={e => setPassword (e.target.value)}
                        value={password}
                    />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}