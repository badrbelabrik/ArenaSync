import React from "react";

export function Searchbar({value,onChange}){

    return (
            <div className="search-bar">
                <i className="search-bar-icon fa-solid fa-magnifying-glass"></i>
                    <input className="search-bar-input" type="text" value={value}
                onChange={(e) => onChange(e.target.value)} placeholder="Search" />
                <div className="search-bar-filter">
                    <i className="search-bar-filter-icon fa-solid fa-sliders"></i>
                </div>
                
            </div>
    )
}