import React from "react";

class BTwo extends React.Component{
  constructor(props) {
    super(props)
  }

  returnThis = () =>{
    console.log(this)
    console.log(this.props.state.myRef.current)

  }

  componentDidMount = () => {
    console.log('this just fired 2')
    this.props.state.myRef.current=  this.props.state.myRef.current.push(9)
    
  }



  render() {
    return (
      <div>
        {this.returnThis()}
        <button >Update age</button>
      </div>
    );
  }
}

export default BTwo;