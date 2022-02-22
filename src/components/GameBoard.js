import Tile from "./Tile";

import {useState,useRef} from "react"
import Title from "./TitleClass";
import TitleClass from "./TitleClass";
import TitleOverall from "./TileOverall";


function GameBoard(
 {
  setClickedArray, clickedArray, clickedRef,
  BombLocationObject, gameInformation, gameInformationState, setGameInformation
}
) {

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Determines the size of the map 4 x 4, 8 x 8 etc/
  const arraySize = 3;


  const tsWidth = (SCREEN_WIDTH*.2)/arraySize;
  const tsHieght = (SCREEN_HEIGHT*.2)/arraySize;
  // TileSize: Note the .5 and .7 is to account for the size of the gameboard. check the width and height of CSS. It matches.
  
  function RandomNumber(x){
    return Math.floor((Math.random() * x));
  }

  // const topRow = [...Array(arraySize)].map((_, i) =>[...Array(arraySize)].map((_, j) =>
  // <TitleClass
  // color = "red"
  // backgroundColor = "blue"
  // w = {tsWidth}
  // h={tsHieght}
  // bombNumber = {RandomNumber(4)}

  // i={i}
  // j={j}
  // />))
  

  return (

    <div className ="outerDiv">
    <div className="gameboard">
     {/* {topRow} */}
    </div>
    </div>
  );
}

export default GameBoard;
