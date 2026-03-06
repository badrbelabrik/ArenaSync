import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tournamentDB } from '../data/tournamentDB'
import {TournamentCard} from "./TournamentCard.jsx";


export function TournamentDetails() {
    const {id} = useParams();
    const [tournament, setTournament] = useState(tournamentDB.find(item => item.id == id))
    return (
        <div className="details">
            <TournamentCard tournament={tournament} />
        </div>
    )
}