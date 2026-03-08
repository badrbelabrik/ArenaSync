import React from "react";

export function ParticipantRow(props){
    return (
        <div className="participant">
            <div className="participant-content">
                <img className="participant-content-img" src={props.avatar} alt="" />
                <span className="participant-content-name">{props.name}</span>
            </div>
            <div className="participant-status">
                <i className="fa-solid fa-circle-check"></i>
                <span>{props.status}</span>
            </div>
        </div>
    )
}