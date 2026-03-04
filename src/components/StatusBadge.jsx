import React from "react";

export function StatusBadge(props){
    return(
        <div className="badge">
            <h2 className="badge-title">{props.status}</h2>
        </div>
    )
}