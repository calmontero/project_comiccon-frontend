import React, { useState } from "react";

const BASE_URL = 'http://localhost:9292/';

function ProgramsForm({ onAddProgram }) {
    const[form, setForm] = useState({
        name: "",
        desc: "",
        sponsor: "",
        sits: "",
        room: "",
        date: "",
        startDate: "",
        endDate: "",
        image: "",
        status: "true"
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch(BASE_URL + "programs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            desc: form.desc,
            sponsor: form.sponsor,
            quantity_fan: form.sits,
            room: form.room,
            image_url: form.image,
            status: true
          }),
        })
        .then((response) => response.json())
        .then((newProgram) => onAddProgram(newProgram))
    }

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form">
            <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
                <input 
                type="text"
                name="name"
                placeholder="Enter a program's name..."
                value={form.name}
                onChange={updateField}
                />

                <input 
                type="text"
                name="desc"
                placeholder="Enter a program's desc..."
                value={form.desc}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="sponsor"
                placeholder="Enter a sponsor..."
                className="Input-text"
                value={form.sponsor}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="sits"
                placeholder="Enter sits available..."
                className="Input-text"
                value={form.sits}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="room"
                placeholder="Enter number of room..."
                className="Input-text"
                value={form.room}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="image"
                placeholder="Enter a program's image URL..."
                className="Input-text"
                value={form.image}
                onChange={updateField}
                />
                <br />
                <button type="submit"variant="outlined" color="secondary">Create Program</button>                
            </form>
        </div>
    );
    
}

export default ProgramsForm;