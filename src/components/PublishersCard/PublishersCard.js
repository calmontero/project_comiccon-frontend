import React, { useState } from 'react';
import "./PublishersCard.css";
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

function PublishersCard({ publisher, onUpdatePublisher, onDeletePublisher }) {
    const [newPublisher, setNewPublisher] = useState({...publisher});
    const [editMode, setEditMode] = useState(false);

    function handleChange(e) {
        const updatedValue = { ...newPublisher };
        updatedValue[e.target.name] = e.target.value;
        setNewPublisher({ ...updatedValue });
    }

    function toggleEdit() {
        setEditMode(!editMode);
    }
    
    function handleUpdate(e) {
        e.preventDefault();
        onUpdatePublisher(newPublisher);
        setEditMode(false);
    }
    return (
        <div className="card">
            <Link to={`/publishers/${publisher.id}`}>
                <p>{publisher.name}</p>
            </Link>
            { editMode && (
            <>
                <form onSubmit={handleUpdate}>
                <Button type="submit" variant="contained" color="default" startIcon={<SaveIcon />}>Update</Button>
                &nbsp;
                <Button onClick={() => onDeletePublisher(publisher)} variant="contained" color="default" startIcon={<DeleteIcon />}>
                    Delete </Button>
                    &nbsp;
                    &nbsp;
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Enter name..."
                        value={newPublisher.name}
                        onChange={handleChange}
                        />
                        &nbsp;
                        &nbsp;
                        <Input
                        type="text"
                        name="history"
                        style={{width: "850px"}}
                        placeholder="Enter the history about..."
                        className="Input-text"
                        value={newPublisher.history}
                        onChange={handleChange}
                        />
                        &nbsp;
                        &nbsp;
                        <Input
                        type="text"
                        name="founded"
                        style={{width: "60px"}}
                        placeholder="Enter year of founded..."
                        className="Input-text"
                        value={newPublisher.founded}
                        onChange={handleChange}
                        />
                        &nbsp;
                        &nbsp;
                        <Input
                        type="text"
                        name="country"
                        style={{width: "150px"}}
                        placeholder="Enter country..."
                        className="Input-text"
                        value={newPublisher.country}
                        onChange={handleChange}
                        />
                        &nbsp;
                        &nbsp;
                        <Input
                        type="text"
                        name="image_url"
                        style={{width: "300px"}}
                        placeholder="Enter image URL..."
                        className="Input-text"
                        value={newPublisher.image_url}
                        onChange={handleChange}
                        />
                        &nbsp;
                        &nbsp;
                        <Input
                        type="text"
                        name="wikipedia_url"
                        style={{width: "300px"}}
                        placeholder="Enter wikipedia URL..."
                        className="Input-text"
                        value={newPublisher.wikipedia_url}
                        onChange={handleChange}
                        />
                </form>
                </>
            )}
            <Button onClick={toggleEdit} variant="contained" color="default" startIcon={<EditIcon />}>Edit</Button>
        </div>
    );
}

export default PublishersCard;