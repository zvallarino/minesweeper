import React, { useEffect, useRef } from "react";

function TitleCanvas({}){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  
  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  


  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = SCREEN_WIDTH * 2;
    canvas.height = SCREEN_HEIGHT *2;
    canvas.style.width = `${SCREEN_WIDTH*(10/20)}px`
    canvas.style.height = `${SCREEN_HEIGHT*(18/20)}px`
    canvas.style.backgroundColor = "green";
    canvas.style.position = "absolute";
    canvas.style.left = `${SCREEN_WIDTH*(5/20)}px`;
    canvas.style.top = `${SCREEN_HEIGHT*(1/20)}px`;
    canvas.style['z-index'] = 1;

 
    const context = canvas.getContext("2d");
    context.scale(2,2);
    contextRef.current = context

    

  },[])

  function Down(e){
    console.log(e)
    console.log('fired')
  }

  function onClick(e){
    console.log(e)
    console.log('fired')
  }

  return (
   <canvas
   tabIndex = "0"
   onKeyPress={Down}
   onClick = {onClick}
  //  onContextMenu="return false;"
   ref = {canvasRef}
   />
  )
}

export default TitleCanvas;