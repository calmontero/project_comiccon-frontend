import React, { useState, useEffect } from "react";
import "./PublishersContainer.css";
//import {BASE_URL} from "../constraints/index.js";
import PublishersCard from "../PublishersCard/PublishersCard";
import PublishersForm from "../PublishersForm/PublishersForm";
const BASE_URL = 'http://localhost:9393/';


//characters
function PublishersContainer() {
    //const [showForm, setShowForm] = useState(false);
    const [publishers, setPublishers] = useState([]);

    // READ
    useEffect(() => (
        fetch(BASE_URL + "publishers")
          .then((response) => response.json())
          .then((publisherData) => setPublishers(publisherData))
      ),[]);
    
    function populatePublishers() {
        return publishers.map((p) => (
            <PublishersCard publisher={p} onUpdatePublisher={updatePublisher} onDeletePublisher={deletePublisher} />
        ))
    }

    // CREATE
    function createPublisher(publisher) {
        fetch(BASE_URL + "publishers", {
            method: "POST",
            body: JSON.stringify(publisher),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((publisherData) => setPublishers([...publishers, publisherData]));
    }

    // UPDATE
    function updatePublisher(publisher) {
        fetch(BASE_URL + "publishers/" + publisher.id, {
            method: "PATCH",
            body: JSON.stringify(publisher),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
        });
    }

    // DELETE
    function deletePublisher(publisher) {
        fetch(BASE_URL + "publishers/" + publisher.id, {
            method: "DELETE",
        });
        const newPublishers = publishers.filter((p) => p.id !== publisher.id);
        setPublishers(newPublishers);
    }

    return (
        <div>
            <h2 className="publisher-header">Publishers</h2>
            <PublishersForm onAddPublisher={createPublisher} />
            <div className="publisher-container">{publishers && populatePublishers()}</div>
        </div>
    );
    
}

export default PublishersContainer;