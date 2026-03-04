import React from "react";

export function StatusBadge(props){
    let color = () => {
        if(props.status === "On Going"){
            return "badge badge-green"
        } else if(props.status === "Upcoming"){
            return "badge badge-blue"
        } else {
            return "badge badge-gray"
        }
    }
    return(
        <div className={color()}>
            <h2 className="badge-title">{props.status}</h2>
        </div>
    )
}