import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");
  const [renderPets, setRenderPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(res => res.json())
    .then(data => {
      setPets(data)
      setRenderPets(data)
    })
  }, [])

  function onChangeType(type) {
    setFilters(type)
  }

  function onFindPetsClick() {
    const petToDisplay = pets.filter(pet => {
        if (pet.type === filters) {
          return (pet.type === filters)
        } else if (filters === "all") {
          return pets
        }
      })
    setRenderPets(petToDisplay)
  }

  function updatingAdopt(updates) {
    const updatedData = renderPets.map(pet => {
      if (pet.id === updates.id) {
        return updates
      } else { return pet }
    })
    setRenderPets(updatedData)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={onChangeType} 
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
              pets={renderPets}
              updatingAdopt={updatingAdopt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
