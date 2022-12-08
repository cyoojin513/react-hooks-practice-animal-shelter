import React from "react";

function Pet({id, name, type, gender, age, weight, isAdopted, updatingAdopt}) {

  function handleAdopt() {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        isAdopted: true
      })
    }).then(res => res.json())
      .then(updatedData => updatingAdopt(updatedData))
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? "♂ " : "♀ " }
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button 
          className={isAdopted ? "ui primary button" : "ui disabled button"}
        >
          Already adopted
        </button>
        <button
          className={isAdopted ? "ui disabled button" : "ui primary button"}
          onClick={handleAdopt}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
