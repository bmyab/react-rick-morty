import React from "react";

function Character( {character} ){
  return (
      <div className="text-center p-5">
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
        <p className="pt-2">{character.origin.name}</p>
        <p>{character.species}</p>
        <span>{character.location.name}</span>
      </div>
  );
};

export default Character;
