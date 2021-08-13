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
    const [updateProgram, setUpdateProgram] = useState([]);
    const [editMode, setEditMode] = useState(false);

    //Programs List
    useEffect(() => (
        fetch(BASE_URL + "programs")
          .then((response) => response.json())
          .then((data) => setPrograms(data))
    ),[]);

    function handleAddProgram(newProgram) {
        const updatedPrograms = [...programs, newProgram];
        setPrograms(updatedPrograms);
    }

    function handleUpdateProgram(updateProgram) {
        setUpdateProgram(updateProgram);
        setEditMode(!editMode);
    }
   
    function handleDeleteProgram(id) {
        const updatedPrograms = programs.filter((programList) => programList.id !== id);
        setPrograms(updatedPrograms);
    }

    return (
        <div className="program-container">
            <h1>Programs</h1>         
            <ProgramsForm onAddProgram={handleAddProgram}  onUpdateProgram={updateProgram} modeState={editMode} />
            { programs.map(program => {
                return < ProgramCard
                            key={program.id}
                            program={program}
                            onDeleteProgram = {handleDeleteProgram}
                            onUpdateProgram = {handleUpdateProgram}
                            />
                })
            }   
        </div>
    )
}

export default ProgramsContainer;