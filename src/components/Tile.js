import { useState,useRef, useEffect } from "react";

function Tile({ tsWidth, tsHieght, bombOrNot, i,
  j, setClickedArray, clickedArray,
  clickedRef, arraySize, BombLocationObject
}) {
  let bombNumber = squareCreator(i,j); 
  

  


  const [buttonColor,setButtonColor] = useState(false)
  const [color,setColor]=useState("")
  const bombRef = useRef(false)
  const [clickedOrNot,setClicked] = useState(false)

  const indentifier = [`${i}${String.fromCharCode(97 + j)}`];

  BombLocationObject.current[indentifier] = BombOrNotFunction();



  function handleContext(e){
    e.preventDefault()
    setColor("tileBlue")
    setButtonColor(true)
    console.log(e)
    console.log(e.type ==="contextmenu")
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
    [`${bottom}${left}`],[`${bottom}${middleH}`],[`${bottom}${right}`]
]

let counter = 0;

let bombsOnly = getKeyByValue(BombLocationObject.current,"BOMB")
console.log(bombsOnly)

arrayz.forEach((element)=>{
  if(bombsOnly.includes(element[0])){
    counter+=1
  }
})

return counter
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).filter(key => object[key] === value);
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
     return squareCreator(i,j)
   }
 }

 function handleClick(e){
  console.log(e)
  console.log(e.type)
  setButtonColor(true)
  setColor("tileYellow")
  setClicked(true)
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
