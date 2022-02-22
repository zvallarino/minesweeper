import GameBoard from './GameBoard';
import { useState, useRef, useEffect } from "react";
import TileOverall from './TileOverall';
import ATwo from './ATwo';


function TSone({setAllTiles,allTiles}) {

  useEffect(()=>{

    setterOfTilesObject()
    console.log("fired")
    console.log(allTiles)
    
  },[])

  console.log(allTiles)
  
  function setterOfTilesObject(){
    setAllTiles(dogs => dogs,{
      "a9":"blue"
    })
    console.log(allTiles)
  }

  return (
    <button className="tile">
      hello
      
    </button>
  );
}

export default TSone;