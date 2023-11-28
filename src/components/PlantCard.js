import React, { useState } from "react";

function PlantCard( { plant } ) {
  const { name, image, price } = plant;
  const [isClicked, setIsClicked] = useState(true);

  function handleClick(){
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isClicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;