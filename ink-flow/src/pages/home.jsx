import React, { useState } from "react";
import './Home.css'

const Home = () => {

const [action,setAction] = useState ("Home");

    return (
        <section>
            <div className="img-box">
                <img src="/Silver-Mesmerizing-Inkflow.jpg" width={500} height={500} alt="A shiny glow of fog with a reflection"></img>
            </div>
            <div className="input-box">
            <div className="header">
                <label className="text">{action}</label>
            </div>
            <div className="box-1">
            <form className="box-2">
                <input type="search-bar" placeholder="search-box">
                </input>
            </form>
            </div>
            <div className="submit-box">
                <div className={action==="Search"?"submit blue":"submit"} onClick={()=>{setAction("Search")}}>Search</div>
                <div className={action==="Signup"?"submit blue":"submit"} onClick={()=>{setAction("Signup")}}>Signup</div>
            </div>
            </div>
        </section>
    )
}

export default Home
// Updated Home name