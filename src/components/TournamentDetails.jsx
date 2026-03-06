import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tournamentDB } from '../data/tournamentDB'
export function TournamentDetails() {
    const {id} = useParams();
    const [tournament, setTournament] = useState(tournamentDB.find(item => item.id == id))
    return (
        <div> this is the details page of the {tournament.title} that have id : {id}</div>
    )
}