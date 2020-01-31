import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image}></img>
      <h2>{props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
    </div>

  );
}
