import GameBoard from './GameBoard';
import { useState, useRef } from "react";


function Game() {

  const [clickedArray,setClickedArray] = useState([])
  const clickedRef = useRef([])

  console.log(clickedRef)


  return (
    <div className="game">
      <GameBoard setClickedArray = {setClickedArray} clickedArray = {clickedArray} clickedRef = {clickedRef}/>
    </div>
  );
}

export default Game;
