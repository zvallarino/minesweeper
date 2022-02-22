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