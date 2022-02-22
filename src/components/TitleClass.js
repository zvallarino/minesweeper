// import React from "react";

// class TitleClass {
//   constructor(props) {
//     super(props)
//     this.state = {
//       color:props.color,
//       backgroundColor:props.backgroundColor,
//       w:props.w,
//       h:props.h,
//       bombNumber:props.bombNumber,
//       i:props.i,
//       j:props.j
//     };

  
//   }

//   handleClick = () =>{
//     this.setState({color:"black"})
//     this.setState({backgroundColor:"yellow"})
//    console.log(this)

//   }



// convertToIndentifier = () =>{
//   return `${this.state.i}${String.fromCharCode(97 + this.state.j)}`
// }


//   handleContext = (e) =>{
//     e.preventDefault()
//     this.setState({backgroundColor:"red"})
//   }


  
//   render() {
//     return (
//       <button 
//       onClick = {this.handleClick}
//       onContextMenu={this.handleContext}
//       style={{ color: this.state.color, height : this.state.h, width: this.state.w, backgroundColor:this.state.backgroundColor }}
//       >
//       {this.setBombState()}
//       </button>
//     );
//   }
// }

// export default TitleClass;