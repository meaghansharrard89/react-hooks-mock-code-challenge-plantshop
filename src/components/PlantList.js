import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, handleDelete, handleUpdatePrice } ) {

  return (
    <ul className="cards">
      {plants.map((item) => 
      <PlantCard 
        key={item.id}
        plant={item}
        handleDelete={handleDelete}
        handleUpdatePrice={handleUpdatePrice}
      />)}
      </ul>
  );
}

export default PlantList;