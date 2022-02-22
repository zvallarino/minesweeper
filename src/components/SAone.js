import GameBoard from './GameBoard';
import { useState, useRef } from "react";
import TileOverall from './TileOverall';
import ATwo from './ATwo';
import TSone from './TSone';


function SAone() {


  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;
  const [allTiles,setAllTiles] = useState({});

  //Determines the size of the map 4 x 4, 8 x 8 etc/
  const gameboardSize = 2;

  const tileWidth = (SCREEN_WIDTH*.5)/gameboardSize;
  const tileHieght = (SCREEN_HEIGHT*.7)/gameboardSize;
  // TileSize: Note the .5 and .7 is to account for the size of the gameboard. check the width and height of CSS. It matches.

  const gameBoardGenerator = [...Array(gameboardSize)].map((_, i) =>[...Array(gameboardSize)].map((_, j) =>
  <TSone
  setAllTiles = {setAllTiles}
  allTiles = {allTiles}

  />))
  return (
    <div className="game">
      {gameBoardGenerator}
    </div>
  );
}

export default SAone;
