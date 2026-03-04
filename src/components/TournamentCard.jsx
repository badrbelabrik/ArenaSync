import React from "react";
import { StatusBadge } from "./StatusBadge";

export function CardsContainer({tournaments}){
    return (
        <div className="container">
            {tournaments.map(tournament => <TournamentCard key={tournament.id} tournament={tournament} />)}
        </div>
    )
}

export function TournamentCard({tournament}){
    return (
        <div className="tournament-card">
            <div className="tournament-card-header">
                <img className="tournament-card-header-img" src={tournament.logo} alt="" />
                <div className="tournament-card-header-flex">
                    <p className="tournament-card-header-title">{tournament.title}</p>
                    <StatusBadge status={tournament.status}/>
                </div>  
            </div>  
            <p>{tournament.description}</p>
            <div className="divider"></div>
            <div className="tournament-card-rules">
                <div className="tournament-card-rule"><i className="fa-solid fa-users"></i> <p>{tournament.participants.current}/{tournament.participants.max} Participants - {tournament.visibility}</p></div>
                <div className="tournament-card-rule"><i className="fa-solid fa-trophy"></i> <p>{tournament.format}</p></div>
                <div className="tournament-card-rule"><i className="fa-solid fa-clipboard-list"></i> <p>{tournament.date}</p></div>
                <div className="tournament-card-rule"><i className="fa-solid fa-location-dot"></i> <p>{tournament.location}</p></div>
            </div>
        </div>
    )
}