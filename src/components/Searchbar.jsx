import React from "react";

export function Searchbar({value,onChange}){

    return (
            <div className="search-bar">
                <button className="search-bar-btn"><i className="search-bar-icon fa-solid fa-magnifying-glass"></i></button>
                    <input className="search-bar-input" type="text" value={value}
                onChange={(e) => onChange(e.target.value)} placeholder="Search" />
                <div className="search-bar-filter">
                    <i className="search-bar-filter-icon fa-solid fa-sliders"></i>
                </div>
                
            </div>
    )
}