import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, updatingAdopt}) {
  return (
    <div className="ui cards">
      {pets.map(data => 
        <Pet 
          key={data.id}
          id={data.id}
          name={data.name}
          type={data.type}
          gender={data.gender}
          age={data.age}
          weight={data.weight}
          isAdopted={data.isAdopted}
          updatingAdopt={updatingAdopt}
        />    
      )}
    </div>
  )
}

export default PetBrowser;
