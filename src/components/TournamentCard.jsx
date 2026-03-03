import React from "react";

export function TournamentCard(){
    return (
        <div className="tournament-card">
            <div className="tournament-card-header">
                <img className="tournament-card-header-img" src="./src/images/card-logo.jpg" alt="" />
                <div className="tournament-card-header-flex">
                    <p className="tournament-card-header-title">Shuttle Masters League</p>
                    // badge place
                </div>  
            </div>  
            <p>Top players battle it out with skillful rallies
                    and powerful smashes.</p>
            <div className="divider"></div>
            <div className="tournament-card-rules">
                <div className="tournament-card-rule"><i className="fa-solid fa-users"></i> <p>24/32 Participants - public</p></div>
                <div className="tournament-card-rule"><i className="fa-solid fa-trophy"></i> <p>Single Elimination</p></div>
                <div className="tournament-card-rule"><i className="fa-solid fa-clipboard-list"></i> <p>October 12.2025</p></div>
                <div className="tournament-card-rule"><i className="fa-solid fa-location-dot"></i> <p>Adminton Hall 1</p></div>
            </div>
        </div>
    )
}