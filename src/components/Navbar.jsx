import React from "react";
import {useNavigate} from "react-router-dom";

export function Navbar(){
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <button onClick={() => navigate("/")} className="navbar-btn"><i className="fa-solid fa-house"></i>Home</button>
            <button className="navbar-btn"><i className="fa-regular fa-calendar"></i>Tournament</button>
            <button className="navbar-btn"><i className="fa-solid fa-user"></i>Profile</button>
        </div>
    )
}