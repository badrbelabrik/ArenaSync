import React from "react";

export function ParticipantRow(){
    return (
        <div className="participant">
            <div className="participant-content">
                <img className="participant-content-img" src="./src/images/player1.png" alt="" />
                <span className="participant-content-name">Ethan Miller</span>
            </div>
            <div className="participant-status">
                <i class="fa-solid fa-circle-check"></i>
                <span>Confirmed</span>
            </div>
        </div>
    )
}