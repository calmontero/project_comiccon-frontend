import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ProgramsDetails.css";
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
        <div className="card">
            <img src={program.image_url} 
                 alt={program.name}
                 className="program-img"
            ></img>
            <p>Descripction: {program.desc} </p>
        </div>
    );
}

export default ProgramsDetails;