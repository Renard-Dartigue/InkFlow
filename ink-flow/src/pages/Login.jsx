import React from "react"
import './Login.css'

const Login = () => {
    return (
        
     <div className="section">
     <div className="header">
        <label className="text">Sign Up</label>
     </div>
     <div className="box-1">
    <form className="box-2">
    <div className="input">
        <label>Email</label>
        <input type="Email"/>
    </div>
    </form>
    <form className="box-2">
    <div className="input">
    <label>Password</label>
        <input type="Password"/>
    </div>
    </form>
    </div>
    <div className="submit-box">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
    </div>
     </div>
    )
}

export default Login