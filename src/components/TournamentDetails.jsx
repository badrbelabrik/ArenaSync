import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tournamentDB } from "../data/tournamentDB";
import { TournamentCard } from "./TournamentCard.jsx";
import { StatusBadge } from "./StatusBadge.jsx";
import { Tabsystem } from "./TabSystem.jsx";
import { ParticipantRow } from "./ParticipantRow.jsx";
import { useNavigate } from "react-router-dom";

export function TournamentDetails({tournaments}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const tournament = tournaments.find((item) => item.id == id)
  const [activeTab, setActiveTab] = useState("participants")

  return (
    <div className="details">
      <div className="details-header">
        <div className="details-header-title">
          <i
            onClick={() => navigate("/")}
            className="details-header-title-icon fa-solid fa-chevron-left"
          ></i>
          <h1 className="details-header-title-name">Tournament</h1>
        </div>
        <div className="details-tournament-card">
          <div className="details-tournament-card-header">
            <img
              className="details-tournament-card-header-img"
              src={tournament.logo}
              alt=""
            />
            <div className="details-tournament-card-header-flex">
              <p className="details-tournament-card-header-title">
                {tournament.title}
              </p>
              <StatusBadge status={tournament.status} />
            </div>
          </div>
          <p>{tournament.description}</p>
          <div className="divider"></div>
          <div className="details-tournament-card-rules">
            <div className="details-tournament-card-rule">
              <i className="fa-solid fa-users"></i>{" "}
              <p>
                {tournament.participantsCount.current}/
                {tournament.participantsCount.max} Participants -{" "}
                {tournament.visibility}
              </p>
            </div>
            <div className="details-tournament-card-rule">
              <i className="fa-solid fa-trophy"></i> <p>{tournament.format}</p>
            </div>
            <div className="details-tournament-card-rule">
              <i className="fa-solid fa-clipboard-list"></i>{" "}
              <p>{tournament.date}</p>
            </div>
            <div className="details-tournament-card-rule">
              <i className="fa-solid fa-location-dot"></i>{" "}
              <p>{tournament.location}</p>
            </div>
          </div>
        </div>
        <Tabsystem activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      {activeTab === "info" && (
                <div className="details-participantslist">
          <h2>Subscribed Player Info</h2>

          {tournament.subscribedPlayer ? (
            <div className="details-info">
              <p><strong>Name:</strong> {tournament.subscribedPlayer.name}</p>
              <p><strong>Team:</strong> {tournament.subscribedPlayer.team}</p>
              <p><strong>Level:</strong> {tournament.subscribedPlayer.level}</p>
            </div>
          ) : (
            "No subscribed player found"
          )}
        </div>
      )}
      {activeTab === "participants" && (<div className="details-participantslist">
        <h2>Participants List</h2>
        <div className="details-participantslist-participants">
          {tournament.participants.length > 0
            ? tournament.participants.map((item) => (
              <ParticipantRow
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                status={item.status}
              />
            ))
            : "No Participants Found"}
        </div>
      </div>)}
          
    </div>
  );
}
