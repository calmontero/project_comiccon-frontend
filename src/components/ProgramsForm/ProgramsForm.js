import React, { useState } from "react";

const BASE_URL = 'http://localhost:9292/';

function ProgramsForm({ onAddProgram, onUpdateProgram, modeState }) {
    const id = onUpdateProgram.id;

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

    if (modeState === true) {
        form.name = onUpdateProgram.name;
        form.desc = onUpdateProgram.desc;
        form.sponsor = onUpdateProgram.sponsor;
        form.sits = onUpdateProgram.quantity_fan;
        form.room = onUpdateProgram.room;
        form.image = onUpdateProgram.image_url  
    }
      
    function handleSubmit(e) {
        return !modeState
        ? createProgram(e)
        : updateProgram(e);
    }

    function createProgram(e) {
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

    function updateProgram(e) {
        fetch(BASE_URL + `programs/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ 
            name: form.name,
            desc: form.desc,
            sponsor: form.sponsor,
            quantity_fan: form.sits,
            room: form.room,
            image_url: form.image
            }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        })
        .catch(err => console.log(err))
    }

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form">
            <form  noValidate autoComplete="off" onSubmit={handleSubmit} >
                <input 
                type="text"
                name="name"
                placeholder="Enter a program's name..."
                defaultValue={form.name}
                onChange={updateField}
                />

                <input 
                type="text"
                name="desc"
                placeholder="Enter a program's desc..."
                defaultValue={form.desc}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="sponsor"
                placeholder="Enter a sponsor..."
                className="Input-text"
                defaultValue={form.sponsor}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="sits"
                placeholder="Enter sits available..."
                className="Input-text"
                defaultValue={form.sits}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="room"
                placeholder="Enter number of room..."
                className="Input-text"
                defaultValue={form.room}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="image"
                placeholder="Enter a program's image URL..."
                className="Input-text"
                defaultValue={form.image}
                onChange={updateField}
                />
                <br />
                <button type="submit"variant="outlined" color="secondary">{!modeState ? "Create Program" : "Update Program"}</button>                
            </form>
        </div>
    );
    
}

export default ProgramsForm;