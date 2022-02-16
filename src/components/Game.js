import GameBoard from './GameBoard';
import { useState, useRef } from "react";


function Game() {

  const [clickedArray,setClickedArray] = useState([])
  const clickedRef = useRef([])
  const BombLocationObject = useRef({})



  return (
    <div className="game">
      <GameBoard
      setClickedArray = {setClickedArray}
      clickedArray = {clickedArray}
      clickedRef = {clickedRef}
      BombLocationObject = {BombLocationObject}
      />
    </div>
  );
}

export default Game;
