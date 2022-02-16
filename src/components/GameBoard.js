import Tile from "./Tile";

import {useState,useRef} from "react"

function GameBoard(
 {setClickedArray, clickedArray, clickedRef,
  BombLocationObject}
) {
  



  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Determines the size of the map 4 x 4, 8 x 8 etc/
  const arraySize = 4;


  const tsWidth = (SCREEN_WIDTH*.5)/arraySize;
  const tsHieght = (SCREEN_HEIGHT*.7)/arraySize;
  // TileSize: Note the .5 and .7 is to account for the size of the gameboard. check the width and height of CSS. It matches.
  
  function RandomNumber(x){
    return Math.floor((Math.random() * x));
  }




  const topRow = [...Array(arraySize)].map((_, i) =>[...Array(arraySize)].map((_, j) =>
  <Tile
  i ={i}
  j = {j}
  bombOrNot = {RandomNumber(4)}
  setClickedArray = {setClickedArray}
  clickedArray = {clickedArray}
  tsWidth = {tsWidth}
  tsHieght={tsHieght}
  clickedRef = {clickedRef}
  arraySize = {arraySize}
  BombLocationObject = {BombLocationObject}
  />))
  

  return (

    <div className ="outerDiv">
    <div className="gameboard">
     {topRow}
    </div>
    </div>
  );
}

export default GameBoard;
