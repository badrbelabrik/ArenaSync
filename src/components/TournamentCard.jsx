import React from "react";

export function TournamentCard(){
    return (
        <div className="tournament-card">
            <div className="tournament-card-header">
                <img className="tournament-card-header-img" src="./src/images/card-logo.jpg" alt="" />
                <div className="tournament-card-header-flex">
                    <h2 className="tournament-card-header-title">Shuttle Masters League</h2>
                    <p>the badge place</p>
                </div>                
            </div>
            <div class="divider"></div>
        </div>
    )
}