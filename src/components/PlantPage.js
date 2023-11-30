import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

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

  function handleDelete(id){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setPlants(plants.filter(item => item.id != id))
  })
}

function handleUpdatePrice(updatedPlant) {
  setPlants((plant) => {
    return plant.map((p) => {
      if (p.id === updatedPlant.id) {
        return { ...p, price: updatedPlant.price };
      }
      return p;
    });
  });
}

  return (
    <main>
      <NewPlantForm 
        handleNewPlant={handleNewPlant}
      />
      <Search 
        handleSearch={handleSearch}/>
      <PlantList 
        plants={filteredPlants}
        handleDelete={handleDelete}
        handleUpdatePrice={handleUpdatePrice}
      />
    </main>
  );
}

export default PlantPage;