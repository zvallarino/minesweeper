import { useState,useRef } from "react";

function Tile({ tsWidth, tsHieght, RandomNumberZ, i,j, setClickedArray, clickedArray, clickedRef}) {



  const [buttonColor,setButtonColor] = useState(false)
  const [color,setColor]=useState("")

  const indentifier = [i,j];

  function handleClick(e){
    console.log(e)
    console.log(e.type)
    squareCreator(i,j)
    setButtonColor(true)
    setColor("tileYellow")
    CheckIfClicked()
  }

  function handleContext(e){
    e.preventDefault()
    setColor("tileBlue")
    setButtonColor(true)
    console.log(e)
    console.log(e.type ==="contextmenu")
  }

  function squareCreator(i,j){

    let top = i-1
    let click = i
    let bottom = i+1

    let topA = j-1
    let topB = j
    let topC = j+1

    let arrayz = [
      [top,topA],[top,topB],[top,topC],
      [click,topA],[click,topB],[click,topC],
      [bottom,topA],[bottom,topB],[bottom,topC]
  ]

  console.log(arrayz)

  clickedRef.current = arrayz
  console.log(clickedRef.current)


  }

  function CheckIfClicked(){
    if(clickedRef.current.includes(indentifier)){
      setColor("tileYellow")
    }
  }


  return (
    <button
    onClick = {handleClick}
    onContextMenu={handleContext}
    className={buttonColor?`${color}`:"tile"}
    style={{ color: 'blue', height : tsHieght, width: tsWidth }}
    >
      {i}
      {String.fromCharCode(97 + j)}
    </button>
  );
}

export default Tile;
