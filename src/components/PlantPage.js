import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch ('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((data) => setPlants(data))
  }, [])

  function handleNewPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleSearch(plant){
    setSearch(plant)
  }

  const filteredPlants = plants.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
