import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const initialState = {
  name: '',
  history: '',
  founded: '',
  country: '',
  image_url: '',
  wikipedia_url: ''
};

function PublishersForm({ onAddPublisher }) {
  const[publisher, setPublisher] = useState(initialState);

  function handleChange(e) {
      const updatedValue = {...publisher}
      updatedValue[e.target.name] = e.target.value
      setPublisher(updatedValue)
  }

  function handleSubmit(e) {
      e.preventDefault()
      onAddPublisher(publisher)
      setPublisher(initialState);
  } 
  /*
  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }*/

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
            &nbsp;
            &nbsp;
            <Input
            type="text"
            name="history"
            style={{width: "850px"}}
            placeholder="Enter the history about..."
            className="Input-text"
            value={publisher.history}
            onChange={handleChange}
            />
            &nbsp;
            &nbsp;
            <Input
            type="text"
            name="founded"
            style={{width: "60px"}}
            placeholder="Year..."
            className="Input-text"
            value={publisher.founded}
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
            value={publisher.country}
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
            value={publisher.image_url}
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
            value={publisher.wikipedia_url}
            onChange={handleChange}
            />
            <br />
            <Button type="submit"variant="outlined" color="secondary">Create Publisher</Button>             
        </form>
    </div>
  );
}

export default PublishersForm;