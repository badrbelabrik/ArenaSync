import React, { useState } from "react";
import { StatusBadge } from "./StatusBadge";
import { Link } from "react-router-dom";

export function CardsContainer({ tournaments, onSubscribe, onOpenForm }) {
    return (
        <div className="container">
            {tournaments.length > 0 ? tournaments.map(tournament => <TournamentCard key={tournament.id} tournament={tournament} onSubscribe={onSubscribe} onOpenForm={onOpenForm} />) : "No Tournaments Found"}
        </div>
    )
}

export function TournamentCard({ tournament, onSubscribe, onOpenForm }) {

    function subscribe(e) {
        e.preventDefault()
        e.stopPropagation()
        onSubscribe(tournament.id, !tournament.subscribed)
    }

    return (
        <div className="tournament-card">
            <Link to={`/tournament/${tournament.id}`} className="tournament-card-link">
                <div className="tournament-card-header">
                    <img className="tournament-card-header-img" src={tournament.logo} alt="" />
                    <div className="tournament-card-header-flex">
                        <p className="tournament-card-header-title">{tournament.title}</p>
                        <StatusBadge status={tournament.status} />
                    </div>
                </div>
                <p>{tournament.description}</p>
                <div className="divider"></div>
                <div className="tournament-card-rules">
                    <div className="tournament-card-rule"><i className="fa-solid fa-users"></i> <p>{tournament.participantsCount.current}/{tournament.participantsCount.max} Participants - {tournament.visibility}</p></div>
                    <div className="tournament-card-rule"><i className="fa-solid fa-trophy"></i> <p>{tournament.format}</p></div>
                    <div className="tournament-card-rule"><i className="fa-solid fa-clipboard-list"></i> <p>{tournament.date}</p></div>
                    <div className="tournament-card-rule"><i className="fa-solid fa-location-dot"></i> <p>{tournament.location}</p></div>
                </div>
            </Link>
            <button onClick={(event) => tournament.subscribed ? subscribe(event) : onOpenForm(tournament)} className={`tournament-card-btn ${tournament.subscribed ? "unsubscribe" : "subscribe"}`}> {tournament.subscribed ? "Unsubscribe" : "Subscribe"} </button>
        </div>

    )
}