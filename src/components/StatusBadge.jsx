import React from "react";

export function StatusBadge(props){
    let color = () => {
        if(props.status === "On Going"){
            return "#green"
        } else if(props.status === "Upcoming"){
            return "blue"
        } else {
            return "red"
        }
    }
    return(
        <div className="badge">
            <h2 className="badge-title">{props.status}</h2>
        </div>
    )
}