import React from "react";

export function Searchbar(){
    return (
<div className="search-bar">
                <i className="search-bar-icon fa-solid fa-magnifying-glass"></i>
                <input className="search-bar-input" type="text" id="lname" name="lname" placeholder="Search"/>
                <i className="search-bar-icon fa-solid fa-sliders"></i>
            </div>
    )
}