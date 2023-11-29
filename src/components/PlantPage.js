import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
  }, [])

  function handleNewPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredPlants = plants.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm 
        handleNewPlant={handleNewPlant}
      />
      <Search 
        handleSearch={handleSearch}/>
      <PlantList 
        plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;