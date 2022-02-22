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
  }

  arrayOfClick = () =>{
    const left = this.props.i - 1;
    const middleh = this.props.i;
    const right = this.props.i + 1;
    
    const top = String.fromCharCode(97 + this.props.j-1);
    const middlev = String.fromCharCode(97 + this.props.j);
    const bottom = String.fromCharCode(97 + this.props.j+1);

    console.log(typeof(top))

    let clickArray = [
      [`${left}${top}`],[`${middleh}${top}`],[`${right}${top}`],
      [`${left}${middlev}`],[`${middleh}${middlev}`],[`${right}${middlev}`],
      [`${left}${bottom}`],[`${middleh}${bottom}`],[`${right}${bottom}`],
    ]

    console.log(clickArray)
  }



  componentDidMount = () => {
    console.log('this just fired 2')
    this.returnThis()
    console.log('this just fired 2')
  }

  handleClick = () =>{
    this.setState({backgroundColor:"blue"})
    this.arrayOfClick()
  }


  handleContext = (e) =>{
    e.preventDefault()
    this.setState({backgroundColor:"green"})
  }

  
  isABomb = () =>{
    if(this.props.randomNumber > 2){
        return "BOMB"
    } else {
        return this.convertToIndentifier()
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
        Yo this be crazy
        </button>
      </>
    );
  }
}

export default BTwo;