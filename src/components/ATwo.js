import React from "react";
import BTwo from "./BTwo";

class ATwo extends React.Component{

  constructor(props) {
    super(props);
    this.divRef = React.createRef()
    this.divRef.current = {}
  }

  componentDidMount = () => {
    console.log(this)
    console.log("lol")
    this.numberOfBombsPerSquare(this.divRef.current)
    console.log(this.divRef.current)
    console.log("lol")
  }

  arrayOfClick = (x,y) =>{
    const left = x - 1;
    const middleh = x;
    const right = x + 1;
    
    const top = String.fromCharCode(97 + y-1);
    const middlev = String.fromCharCode(97 + y);
    const bottom = String.fromCharCode(97 + y+1);



    const clickArray = [
      [`${left}${top}`],[`${middleh}${top}`],[`${right}${top}`],
      [`${left}${middlev}`],[`${right}${middlev}`],
      [`${left}${bottom}`],[`${middleh}${bottom}`],[`${right}${bottom}`],
    ]

    // Removed middleV,middleH so it doesnt count itself

   return clickArray
  }


  numberOfBombsPerSquare = (refObject) => {
    for (const property in refObject) {
  // console.log(`${property}: ${refObject[property].i}`);
  const clickCircle = this.arrayOfClick(refObject[property].i,refObject[property].j)
  // console.log(clickCircle)
  let counter = 0;
  for(let i = 0;i<clickCircle.length;i++){
      if(refObject[`${clickCircle[i][0]}`]?.isABomb === "BOMB"){
        counter +=1;
      }
  }
  refObject[property].numberOfBombs = counter
  console.log(refObject[property].numberOfBombs)
  }
  }

  

  randomNumber = (x) => {
    return Math.floor((Math.random() * x));
  }


  handleState = () => {
    console.log(this.divRef)
  }

  gameBoardGenerator = () => [...Array(this.props.gameboardSize)].map((_, i) =>[...Array(this.props.gameboardSize)].map((_, j) =>
  <BTwo

  state = {this.state}
  refs = {this.divRef}
  i = {i}
  j = {j}
  h = {this.props.tileHieght}
  w = {this.props.tileWidth}
  randomNumber = {this.randomNumber(4)}
  backgroundColor = {"red"}
  clicked = {false}

  />))


  render() {
    return (
      <>
      {this.gameBoardGenerator()}
      </>
    );
  }
}

export default ATwo;