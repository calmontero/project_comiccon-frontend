import React from "react";
import { Link } from 'react-router-dom';
import "./ProgramCard.css";

function ProgramCard({ programs }) {
    const { id, name, sponsor } = programs
    //const [editMode, setEditMode] = useState(false);

    return (
        <div className="program">
            <h4><Link to={`/programs/${id}`}>{name}</Link></h4>
            <div className="program-desc">
                <p>Sponsor: {sponsor} </p>
            </div>
        </div>
    );
}

export default ProgramCard;