import React, { useState } from "react"
import './Login.css'

const Login = () => {

const [action,setAction] = useState("Login");

    return (

        <section>
    <div className="img-box">
        <img src="/inkflow-high-resolution-logo-white-on-transparent-background.png"  width={500} height={500} alt="A circle of paint around a paintbrush and Inkflow"/>
    </div>
     <div className="input-box">
     <div className="header">
        <label className="text">{action}</label>
     </div>
     <div className="box-1">
    <form className="box-2">
    <div className="input">
        <input type="Email" placeholder="Email"/>
    </div>
    </form>
    <form className="box-2">
    <div className="input">
        <input type="Password" placeholder="Password"/>
    </div>
    </form>
    </div>
    <div className="submit-box">
        <div className={action==="Login"?"submit blue":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit blue":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
     </div>
     </section>
    )
}

export default Login