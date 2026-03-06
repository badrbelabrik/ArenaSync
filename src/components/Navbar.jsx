import React from "react";

export function Navbar(){
    return (
        <div className="navbar">
            <button className="navbar-btn"><i className="fa-solid fa-house"></i>Home</button>
            <button className="navbar-btn"><i className="fa-regular fa-calendar"></i>Tournament</button>
            <button className="navbar-btn"><i className="fa-solid fa-user"></i>Profile</button>
        </div>
    )
}