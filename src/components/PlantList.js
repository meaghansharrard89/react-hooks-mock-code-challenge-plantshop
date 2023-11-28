import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants } ) {

  return (
    <ul className="cards">{plants.map((item) => 
    <PlantCard 
      key={item.id} 
      plant={item}
    />
    )}
    </ul>
  );
}

export default PlantList;
