import React, { useState } from "react";
import backOfCard from "./back.png";
import useFlip from './hooks';
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipCard, setFlipCard] = useFlip(true)
  return (
    <img
      src={flipCard ? front : back}
      alt="playing card"
      onClick={setFlipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
