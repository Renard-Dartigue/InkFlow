import React, { useState } from "react";
import { LOGIN_USER } from './utils/mutations';
import { useMutation } from '@apollo/client';
import './Login.css';
import Auth from './utils/auth'

const Login = (props) => {
const [Login, {error, data}] = useMutation(LOGIN_USER);
const [action,setAction] = useState("Login");
const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
        ...formState, [name]: value,
    });
}

const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
        const { data } = await Login({
            variables: { ...formState},
        });

        Auth.Login(data.Login.token);
    } catch (e) {
        console.Error(e);
    }

    setFormState({
        email: '',
        password: '',
    });
}

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
        <input type="Email" placeholder="Email" value={formState.email} onChange={handleChange}/>
    </div>
    </form>
    <form className="box-2">
    <div className="input">
        <input type="Password" placeholder="Password" value={formState.password} onChange={handleChange}/>
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