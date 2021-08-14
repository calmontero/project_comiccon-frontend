import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//const BASE_URL = 'http://localhost:9292/';

function PublishersForm({ onAddPublisher }) {
  const[publisher, setPublisher] = useState({
      name: '',
      history: '',
      founded: '',
      country: '',
      image_url: '',
      wikipedia_url: ''
  });

  function handleChange(e) {
      const updatedValue = {...publisher}
      updatedValue[e.target.name] = e.target.value
      setPublisher(updatedValue)
  }

  function handleSubmit(e) {
      e.preventDefault()
      onAddPublisher(publisher)
  } 

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  return (
    <div className="publisher-form">
      <h2>Create New Publisher</h2>
      <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
            <Input 
            type="text"
            name="name"
            placeholder="Enter name..."
            value={publisher.name}
            onChange={handleChange}
            />
            
            <Input
            type="text"
            name="history"
            placeholder="Enter the history about..."
            className="Input-text"
            value={publisher.history}
            onChange={handleChange}
            />
            
            <Input
            type="text"
            name="founded"
            placeholder="Enter year of founded..."
            className="Input-text"
            value={publisher.founded}
            onChange={handleChange}
            />
            
            <Input
            type="text"
            name="country"
            placeholder="Enter country..."
            className="Input-text"
            value={publisher.country}
            onChange={handleChange}
            />
            
            <Input
            type="text"
            name="image_url"
            placeholder="Enter image URL..."
            className="Input-text"
            value={publisher.image_url}
            onChange={handleChange}
            />

            <Input
            type="text"
            name="wikipedia_url"
            placeholder="Enter wikipedia URL..."
            className="Input-text"
            value={publisher.wikipedia_url}
            onChange={handleChange}
            />
            <br />
            <Button type="submit"variant="outlined" color="secondary">Create Publisher</Button>
            <Button onClick={handleReset} variant="outlined" color="secondary">Reset</Button>               
        </form>
    </div>
  );
}

export default PublishersForm;