import React, { useState } from "react";

function PlantCard( { plant } ) {
  const { name, image, price } = plant;
  const [isNotClicked, setAsClicked] = useState(true);

  function handleClick(){
    setAsClicked((isNotClicked) => !isNotClicked)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isNotClicked ? (
        <button 
          onClick={handleClick} 
          className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;