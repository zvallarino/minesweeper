import ATwo from './ATwo';

function Game() {


  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  //Determines the size of the map 4 x 4, 8 x 8 etc/
  const gameboardSize = 6;

  const tileWidth = (SCREEN_WIDTH*.5)/gameboardSize;
  const tileHieght = (SCREEN_HEIGHT*.7)/gameboardSize;
  // TileSize: Note the .5 and .7 is to account for the size of the gameboard. check the width and height of CSS. It matches.
  
  return (
    <div className ="outerDiv">
    <div className="gameboard">
      <ATwo
      gameboardSize = {gameboardSize}
      tileWidth = {tileWidth}
      tileHieght = {tileHieght}
      />
    </div>
    </div>
  );
}

export default Game;
