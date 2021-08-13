import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ProgramsDetails.css";
import FansForm from "../FansForm/FansForm";
const BASE_URL = 'http://localhost:9292/';

function ProgramsDetails() {
    const [program, setProgram] = useState([]);
    const params = useParams();
    const id = params.id;

    //Recover the data
    useEffect(() => (
        fetch(BASE_URL + `programs/${id}`)
            .then((response) => response.json())
            .then((data) => setProgram(data))
    ),[]);

    return (
        <div className="container">
            <div className="card">
                <h2>{program.name}</h2>
                <p>Descripction: {program.desc} </p>
                <p>Sits available: {program.sits_available} </p>
                <p>Room: {program.room} </p>
                <p>Date: 08/20/2021 - Start: 10:00 am - End: 06:00 pm</p>
                <p>Status: {program.status ? "Open" : "Closed"} </p>
            </div>
            <div className="fan">
                <FansForm />
            </div>
        </div>
    );
}

export default ProgramsDetails;