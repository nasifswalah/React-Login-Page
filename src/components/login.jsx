import React from "react"
import './login.css'


function Login() {
    return(
    <div className='login'>
        <input className='input' id='name' placeholder='Email'></input>
        <input id='name' className='input' placeholder='Password'></input>
        <p className='new'>Create new account <p className='signup new'>Singup</p></p>
        <button className='login-btn' >Login</button>
    </div>
    );
}


export default Login