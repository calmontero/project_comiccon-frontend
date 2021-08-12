import React, { useState, useEffect } from "react";
import ProgramCard from "../ProgramCard/ProgramCard";
//import Programs from "../Programs/Programs";
import ProgramsForm from "../ProgramsForm/ProgramsForm";
//import { format } from "date-fns";
//import Programs from "../Programs/Programs";
//import './ProgramsContainer.css';
//import { BASE_URL } from "../constraints/index.js";
//import { DataGrid } from '@material-ui/data-grid';
//import { useDemoData } from '@material-ui/x-grid-data-generator';

const BASE_URL = 'http://localhost:9292/';

function ProgramsContainer() {
    const [programs, setPrograms] = useState([]);

    //Recover the data
    useEffect(() => (
        fetch(BASE_URL + "programs")
          .then((response) => response.json())
          .then((data) => setPrograms(data))
    ),[]);

    function handleAddProgram(newProgram) {
        const updatedPrograms = [...programs, newProgram];
        setPrograms(updatedPrograms);
    }

    return (
        <div className="program-container">
            <h1>Programs</h1>         
            <ProgramsForm onAddProgram={handleAddProgram} />
            { programs.map(program => {
                return < ProgramCard
                            key={program.id}
                            programs={program}
                            />
                })
            }   
        </div>
    )
}

export default ProgramsContainer;