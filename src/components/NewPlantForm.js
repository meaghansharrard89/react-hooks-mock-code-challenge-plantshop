import React, { useState } from "react";

function NewPlantForm( { handleNewPlant } ) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleSubmit(e){
    e.preventDefault();
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then((res) => res.json())
    .then(handleNewPlant)
  }

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;