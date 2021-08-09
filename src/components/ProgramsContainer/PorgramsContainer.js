import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constraints/index.js";

function ProgramsContainer() {
    const [programs, setPrograms] = useState([]);

    //Recover the data
    useEffect(() => (
        fetch(BASE_URL + "programs")
        
          .then((response) => response.json())
          .then((Data) => setPrograms(Data))
    ),[]);

    const listPrograms = programs.map((p) =>
        <li>Event: {p.desc}
            <div>Sponsor: {p.sponsor}</div>
            <div>Sits Available: {p.sits}</div>
            <div>Room: {p.room}</div>
            <div>Start: {p.startDate}</div>
            <div>End: {p.endDate}</div>
            <div>{p.image}</div>
        </li>
        
    );

    return (
        <div>
            <h1>ProgramsContainer</h1>
            <ul>{listPrograms}</ul>
        </div>
    )
}

export default ProgramsContainer;