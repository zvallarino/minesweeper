import React from "react";

class BTwo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
            backgroundColor:props.backgroundColor,
            w:props.w,
            h:props.h,
            clicked:props.clicked
          };
    
 
  }

  convertToIndentifier = () =>{
    return `${this.props.i}${String.fromCharCode(97 + this.props.j)}`
  }

  returnThis = () =>{
    this.props.refs.current[this.convertToIndentifier()] = {}
    this.props.refs.current[this.convertToIndentifier()].i = this.props.i
    this.props.refs.current[this.convertToIndentifier()].j = this.props.j
    this.props.refs.current[this.convertToIndentifier()].clicked = this.state.clicked
    this.props.refs.current[this.convertToIndentifier()].randomNumber = this.props.randomNumber
    this.props.refs.current[this.convertToIndentifier()].isABomb = this.isABomb()
    this.props.refs.current[this.convertToIndentifier()].numberOfBombs = 1;
  }




  componentDidMount = () => {
    this.returnThis()
  }

  handleClick = () =>{
    this.setState({backgroundColor:"blue"})
  }


  handleContext = (e) =>{
    e.preventDefault()
    this.setState({backgroundColor:"green"})
  }

  
  isABomb = () =>{
    if(this.props.randomNumber > 2){
        return "BOMB"
    } 
}




  



  render() {
    return (
      <>
        <button
              onClick = {this.handleClick}
              onContextMenu = {this.handleContext}
              style={
                { height : this.props.h, width: this.props.w, backgroundColor:this.state.backgroundColor }}
        >
        {this.props.refs.current?.[this.convertToIndentifier()]?.isABomb==="BOMB"?"BOMB":this.props.refs.current?.[this.convertToIndentifier()]?.numberOfBombs}
        </button>
      </>
    );
  }
}

export default BTwo;