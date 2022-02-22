import React from "react";

class BTwo extends React.Component{
  constructor(props) {
    super(props)
 
  }

  returnThis = () =>{
    console.log(this)

  }

  componentDidMount = () => {
    console.log('this just fired 2')
  
    console.log('this just fired 2')
  }

  



  render() {
    return (
      <div>
        {this.returnThis()}
        <button>Yo this be crazy</button>
      </div>
    );
  }
}

export default BTwo;