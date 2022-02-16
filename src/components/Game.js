import GameBoard from './GameBoard';
import { useState, useRef } from "react";


function Game() {

  const [clickedArray,setClickedArray] = useState([])
  const clickedRef = useRef([])
  const BombLocationObject = useRef({})
  const gameInformation = useRef({})



  return (
    <div className="game">
      <GameBoard
      gameInformation = {gameInformation}
      setClickedArray = {setClickedArray}
      clickedArray = {clickedArray}
      clickedRef = {clickedRef}
      BombLocationObject = {BombLocationObject}
      />
    </div>
  );
}

export default Game;
