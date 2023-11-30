import React, { useState } from "react";

function PlantCard( { plant, handleDelete, handleUpdatePrice } ) {
  const { id, name, image, price } = plant;
  const [isNotClicked, setAsClicked] = useState(true);
  const [newPrice, setNewPrice] = useState("")

  function handleClick(){
    setAsClicked((isNotClicked) => !isNotClicked)
  }

  function handleChange(e){
    setNewPrice(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const newPlantPrice = {
      price: newPrice
    }
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantPrice),
    })
    .then((res) => res.json())
    .then((updatedPlant) => handleUpdatePrice(updatedPlant))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="updatedprice" 
            placeholder="Update Price"
            value={newPrice}
            onChange={handleChange}
          />
      </form>
      {isNotClicked ? (
        <button 
          onClick={handleClick} 
          className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(plant.id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;