import React, { useState } from 'react';
import "./PublishersCard.css";
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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
                <Button onClick={() => onDeletePublisher(publisher)}>Delete Publisher</Button>

                <form onSubmit={handleUpdate}>
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Enter name..."
                        value={newPublisher.name}
                        onChange={handleChange}
                        />
                        
                        <Input
                        type="text"
                        name="history"
                        placeholder="Enter the history about..."
                        className="Input-text"
                        value={newPublisher.history}
                        onChange={handleChange}
                        />
                        
                        <Input
                        type="text"
                        name="founded"
                        placeholder="Enter year of founded..."
                        className="Input-text"
                        value={newPublisher.founded}
                        onChange={handleChange}
                        />
                        
                        <Input
                        type="text"
                        name="country"
                        placeholder="Enter country..."
                        className="Input-text"
                        value={newPublisher.country}
                        onChange={handleChange}
                        />
                        
                        <Input
                        type="text"
                        name="image_url"
                        placeholder="Enter image URL..."
                        className="Input-text"
                        value={newPublisher.image_url}
                        onChange={handleChange}
                        />

                        <Input
                        type="text"
                        name="wikipedia_url"
                        placeholder="Enter wikipedia URL..."
                        className="Input-text"
                        value={newPublisher.wikipedia_url}
                        onChange={handleChange}
                        />
                    <Button type="submit">Update Publisher</Button>
                </form>
                </>
            )}
            <Button onClick={toggleEdit}>Edit</Button>
        </div>
    );
}

export default PublishersCard;