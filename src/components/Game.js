import GameBoard from './GameBoard';
import { useState, useRef } from "react";
import TileOverall from './TileOverall';
import ATwo from './ATwo';


function Game() {


  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Determines the size of the map 4 x 4, 8 x 8 etc/
  const gameboardSize = 10;

  const tileWidth = (SCREEN_WIDTH*.5)/gameboardSize;
  const tileHieght = (SCREEN_HEIGHT*.7)/gameboardSize;
  // TileSize: Note the .5 and .7 is to account for the size of the gameboard. check the width and height of CSS. It matches.
  
  function RandomNumber(x){
    return Math.floor((Math.random() * x));
  }


  return (
    <div className="game">
      <ATwo color = "red" />
    </div>
  );
}

export default Game;
