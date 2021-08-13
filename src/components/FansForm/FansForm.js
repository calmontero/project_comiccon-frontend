import React, { useState } from "react";

function FansForm({ onAddFan }) {
    const[form, setForm] = useState({
        name: "",
        phone: "",
        email: ""
    });

    return (
        <div className="fan-form">
            <h4>Fan Form</h4>
        </div>
    );
}

export default FansForm;