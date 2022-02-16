import { useState,useRef, useEffect } from "react";

function Tile({ tsWidth, tsHieght, bombOrNot, i,
  j, setClickedArray, clickedArray,
  clickedRef, arraySize, BombLocationObject, 
  gameInformation 
}) {

  const bombNumber = squareCreator(i,j); 
  const [buttonColor,setButtonColor] = useState(false)
  const [color,setColor]=useState("")
  const bombRef = useRef(false)
  const [clickedOrNot,setClicked] = useState(false)
  const [currentClick,setCurrentClick] = useState(null)

  const indentifier = `${i}${String.fromCharCode(97 + j)}`;

  BombLocationObject.current[indentifier] = BombOrNotFunction();
  gameInformation.current[indentifier]={};
  gameInformation.current[indentifier][indentifier]=indentifier;
  gameInformation.current[indentifier]["isABomb"]=BombOrNotFunction();
  gameInformation.current[indentifier]["isClicked"]=false;
  gameInformation.current[indentifier]["bombNumber"]=bombNumber;


  function handleContext(e){
    e.preventDefault()
    setColor("tileBlue")
    setButtonColor(true)
    
  }

  function squareCreator(i,j){
    
    let top = i-1
    let middleV = i
    let bottom = i+1

    let left = String.fromCharCode(97 + j-1)
    let middleH = String.fromCharCode(97 + j)
    let right = String.fromCharCode(97 + j+1)


    let arrayz = [
    [`${top}${left}`],[`${top}${middleH}`],[`${top}${right}`],
    [`${middleV}${left}`],[`${middleV}${right}`],
    [`${bottom}${left}`],[`${bottom}${middleH}`],[`${bottom}${right}`]]

    return arrayz
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).filter(key => object[key] === value);
  }

  function NumberOfBombs(clickArray){
      let counter = 0;
      let bombsOnly = getKeyByValue(BombLocationObject.current,"BOMB");

      clickArray.forEach((element)=>{
      if(bombsOnly.includes(element[0])){
      counter+=1
      }
      })
      return counter
  }

  let bombsPerSquare = NumberOfBombs(squareCreator(i,j));

  function ZeroCheck(){
    bombsPerSquare = NumberOfBombs(squareCreator(i,j));
    console.log(bombsPerSquare)
    if(bombsPerSquare === 0&&BombOrNotFunction()!=="BOMB"){
      console.log(i,j)
    }
  }


  function BombOrNotFunction(){
    if(bombOrNot>2){
      return "BOMB"
    }else{
      return "NOT"
    }
  }

bombRef.current = BombOrNotFunction()

 function returns(){
   if(bombRef.current === "BOMB"){
     return "Bomb"
   }else{
     return bombsPerSquare;
   }
 }

 function handleClick(e){

  setButtonColor(true)
  setColor("tileYellow")
  setClicked(true)
  ZeroCheck()
}

  return (
    <button
    onClick = {handleClick}
    onContextMenu={handleContext}
    className={buttonColor?`${color}`:"tile"}
    style={{ color: 'blue', height : tsHieght, width: tsWidth }}
    >
      
      {clickedOrNot?returns():null}
      {/* {bombNumber}
      {returns()} */}
    </button>
  );
}

export default Tile;
