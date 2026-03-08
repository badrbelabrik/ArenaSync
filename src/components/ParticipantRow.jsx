import React from "react";

export function ParticipantRow(props){
    function participantColor(){
        if(props.status === "Confirmed"){
            return "participant-confirmed"
        } else if(props.status === "Pending"){
            return "participant-pending"
        }
    }
    function statusColor(){
        if(props.status === "Confirmed"){
            return "participant-status-confirmed"
        } else if (props.status === "Pending"){
            return "participant-status-pending"
        }
    }
    return (
        <div className={`participant ${participantColor()}`}>
            <div className="participant-content">
                <img className="participant-content-img" src={props.avatar} alt="" />
                <span className="participant-content-name">{props.name}</span>
            </div>
            <div className={statusColor()}>
                <i className="fa-solid fa-circle-check"></i>
                <span>{props.status}</span>
            </div>
        </div>
    )
}