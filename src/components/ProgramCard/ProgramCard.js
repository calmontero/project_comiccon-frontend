import React from "react";
import { Link } from 'react-router-dom';
//import { Card, Button } from 'react-bootstrap';
import "./ProgramCard.css";
const BASE_URL = 'http://localhost:9292/';

function ProgramCard({ program, onDeleteProgram, onUpdateProgram }) {
    const { id, name, sponsor, image_url } = program;
    /*
    const styles = {
        cardImage: {
            objectFit: 'cover',
            borderRadius: 55,
            height: '25%'
        }
    }*/

    function handleDeleteClick() {
        fetch(BASE_URL + `programs/${id}`, {
            method: "DELETE",
            });
            onDeleteProgram(id);
    }

    function handleUpdateClick() {
        onUpdateProgram(program);
    }

    return (
        <div className="program"  >
            <h4><Link to={`/programs/${id}`}>{name}</Link></h4>
            <div className="program-desc">
                <p>Sponsor: {sponsor} </p>
                <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
                <button onClick={handleUpdateClick} className="emoji-button delete">Modify</button>
            </div>
        </div>
    );
}

export default ProgramCard;