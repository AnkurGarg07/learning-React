import UserContext from "../context/UserContext";
import React from "react";
import { useState } from "react";

export function Login(){
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit=()=>{


    }
    return (
        <>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={User} onChange={(e)=>{setUser(e.target.value)}} />
        <input type="password" placeholder="password" value={Password} onChange={(e)=>{e.target.value}} />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}


