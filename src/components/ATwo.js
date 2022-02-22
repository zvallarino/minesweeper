import React from "react";
import BTwo from "./BTwo";

class ATwo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      "red":"blue"
    }
  }
  

  componentDidMount = () => {
    console.log("This just fired")
    console.log("ATwo")
    // this.stateFunction()
    console.log(this)
    console.log("ATwo")
  }

  // stateFunction = () =>{
  //   this.setState((state) => {
  //     return {random:state.number + 1};
  //   });
  // }

  render() {
    return (
      <>
    <BTwo state={this.state} stateFunction = {this.stateFunction} />
    </>
    );
  }
}

export default ATwo;