import React from "react";

export function StatusBadge({status}){
    const Color = {
        "On Going" : "badge badge-green",
        "Upcoming" : "badge badge-blue",
        "Completed" : "badge badge-gray"
    }
    return(
        <div className={Color[status]}>
            <h2 className="badge-title">{status}</h2>
        </div>
    )
}