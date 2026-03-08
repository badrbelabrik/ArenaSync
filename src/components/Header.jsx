import React from "react";

export function Header(){
    return (
        <div className="header">
            <h1 className="header-title">Good morning, <br />Samuel Walker!</h1>
            <div className="header-content">
                <i className="header-content-logo fa-solid fa-bell"></i>
                <img className="header-content-logo" src="./public/images/logo.jpg" alt="profile picture" />
            </div>
        </div>
    )
}