import React from "react";

export function ParticipantRow({name, avatar, status}){
    const participantColor = {
        "Confirmed" : "participant-confirmed",
        "Pending" : "participant-pending"
    }
    const statusColor = {
        "Confirmed" : "participant-status-confirmed",
        "Pending" : "participant-status-pending"
    }
    return (
        <div className={`participant ${participantColor[status]}`}>
            <div className="participant-content">
                <img className="participant-content-img" src={avatar} alt="" />
                <span className="participant-content-name">{name}</span>
            </div>
            <div className={statusColor[status]}>
                <i className="fa-solid fa-circle-check"></i>
                <span>{status}</span>
            </div>
        </div>
    )
}