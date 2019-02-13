import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div onClick={() => props.handleGuess(props.guessed, props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <strong>{props.name}</strong> 
      </div>
    </div>
  );
}

export default Card;
