import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const initialState = {
    name: '',
    creation: '',
    history: '',
    real_name: '',
    alignment: '',
    image_url: '',
    wikipedia_url: '',
    publisher_id: ''
};

function CharactersForm({ id, onAddCharacter }) {
    const[character, setCharacter] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault()
        character.publisher_id = id;
        onAddCharacter(character)
        setCharacter(initialState);
    }

    function handleChange(e) {
        const updatedValue = {...character}
        updatedValue[e.target.name] = e.target.value
        setCharacter(updatedValue)
    }
    /*
    function handleReset() {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }*/

    return (
        <div className="character-form">
        <h3>Add New Character</h3>
        <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
                <Input 
                type="text"
                name="name"
                placeholder="Enter name..."
                value={character.name}
                onChange={handleChange}
                />
                
                <Input
                type="text"
                name="creation"
                placeholder="Enter creation year..."
                className="Input-text"
                value={character.creation}
                onChange={handleChange}
                />
                
                <Input
                type="text"
                name="history"
                placeholder="Enter history..."
                className="Input-text"
                value={character.history}
                onChange={handleChange}
                />
                
                <Input
                type="text"
                name="real_name"
                placeholder="Enter real name..."
                className="Input-text"
                value={character.real_name}
                onChange={handleChange}
                />

                <Input
                type="text"
                name="alignment"
                placeholder="Enter alignment..."
                className="Input-text"
                value={character.alignment}
                onChange={handleChange}
                />

                <Input
                type="text"
                name="image_url"
                placeholder="Enter image URL..."
                className="Input-text"
                value={character.image_url}
                onChange={handleChange}
                />

                <Input
                type="text"
                name="wikipedia_url"
                placeholder="Enter wikipedia URL..."
                className="Input-text"
                value={character.wikipedia_url}
                onChange={handleChange}
                />
                <br />
                <Button type="submit"variant="outlined" color="secondary">Create Character</Button>              
            </form>
        </div>
    );
}

export default CharactersForm;