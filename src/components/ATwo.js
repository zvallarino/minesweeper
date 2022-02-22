import React from "react";
import BTwo from "./BTwo";

class ATwo extends React.Component{

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  

  componentDidMount = () => {
    console.log("This just fired")
    console.log("ATwo")
    console.log(this)
    console.log("ATwo")
  }

  bombGenerator = (x) =>{
    let bombNumber = Math.floor((Math.random() * x))
    return bombNumber
}

  gameBoardGenerator = () => 
    [...Array(2)].map((_, i) =>[...Array(2)].map((_, j) =>
  <BTwo
    state = {this}
    ref={this.myRef}
    number = {this.bombGenerator(9)}
  />))

  

 
  
  //  user = {this.state.user}
  // handleAge = {this.handleAge}

  render() {
    console.log('this is the render function')
    return (
      <>
    {this.gameBoardGenerator()}
    </>
    );
  }
}

export default ATwo;