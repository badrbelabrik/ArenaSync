import React from "react";

export function Searchbar(){
    return (
<div class="search-bar">
                <i class="search-bar-icon fa-solid fa-magnifying-glass"></i>
                <input class="search-bar-input" type="text" id="lname" name="lname" placeholder="Search"/>
                <i class="search-bar-icon fa-solid fa-sliders"></i>
            </div>
    )
}