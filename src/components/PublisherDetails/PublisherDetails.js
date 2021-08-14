import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CharactersForm from '../CharactersForm/CharactersForm';
import CharactersTable from "../CharactersTable/CharactersTable";
import "./PublisherDetails.css";
const BASE_URL = 'http://localhost:9292/';

function PublisherDetails() {
    const [publisher, setPublisher] = useState([]);
    const [character, setCharacter] = useState();
    const params = useParams();
    const id = params.id;

    // READ PUBLISHER DATA
    useEffect(() => {
        fetch(BASE_URL + `publishers/${id}`)
          .then((response) => response.json())
          .then((publisherData) => setPublisher(publisherData))
    }, []);


    // CREATE
    function createCharacter(character) {
        fetch(BASE_URL + "characters", {
            method: "POST",
            body: JSON.stringify(character),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((characterData) => setCharacter([...character, characterData]));
    }

    function populateCharacters() {
        const personajes = publisher.characters.map((pCharacter) => pCharacter.name);
        console.log(personajes);
    }

    return (
        <div className="main">
            <div className="container">
                <div className="image">
                    <img src={publisher.image_url} alt=""/>
                </div>
                <div className="text">
                    <h1>{publisher.name}</h1>
                    <p>{publisher.history}</p>
                </div>
                
            </div>
            <div>
                <h2>Characters</h2>
                <CharactersForm onAddCharacter={createCharacter} publisher={publisher} />
                <CharactersTable publisher={publisher} />
            </div>
        </div>
    );
    
}

export default PublisherDetails;