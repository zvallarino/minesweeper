import { useState } from "react";

function Tile() {

  const [buttonColor,setButtonColor] = useState(false)
  const [color,setColor]=useState("")

  function handleClick(e){
    console.log(e)
    console.log(e.type)
    setButtonColor(true)
    setColor("tileYellow")
  }

  function handleContext(e){
    e.preventDefault()
    setColor("tileBlue")
    setButtonColor(true)
    console.log(e)
    console.log(e.type ==="contextmenu")
  }


  return (
    <button onClick = {handleClick}  onContextMenu={handleContext} className={buttonColor?`${color}`:"tile"}>
      HELLO
    </button>
  );
}

export default Tile;
