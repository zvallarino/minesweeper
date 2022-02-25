import React from "react";

class BTwo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
            backgroundColor:props.backgroundColor,
            w:props.w,
            h:props.h,
            clicked:props.clicked,
            numberOfBombs:props.numberOfBombs
          };
    
 
  }

  convertToIndentifier = () =>{
    return `${this.props.i}${String.fromCharCode(97 + this.props.j)}`
  }

  returnThis = () =>{
    this.props.refs.current[this.convertToIndentifier()] = {}
    this.props.refs.current[this.convertToIndentifier()].i = this.props.i
    this.props.refs.current[this.convertToIndentifier()].j = this.props.j
    this.props.refs.current[this.convertToIndentifier()].numberOfBombs = 1;
    this.props.refs.current[this.convertToIndentifier()].isABomb = this.isABomb()
    this.props.refs.current[this.convertToIndentifier()].clicked = this.state.clicked
    this.props.refs.current[this.convertToIndentifier()].randomNumber = this.props.randomNumber
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

   console.log(clickArray)
   
  }

  numberOfBombsPerSquare = (refObject) => {
    for (const property in refObject) {
  const clickCircle = this.arrayOfClick(refObject[property].i,refObject[property].j)
  let counter = 0;
  for(let i = 0;i<clickCircle.length;i++){
      if(refObject[`${clickCircle[i][0]}`]?.numberOfBombs === 0){
        counter +=1;
      }
  }
  refObject[property].numberOfBombs = counter
  }
  }

  componentDidMount = () => {
    this.returnThis()
  }

  handleClick = () =>{
    this.setState({backgroundColor:"#A0DCFF"})
    this.isAZero()
  }


  handleContext = (e) =>{
    e.preventDefault()
    this.setState({backgroundColor:"#B1FFA0"})
  }

  
  isABomb = () =>{
    if(this.props.randomNumber > 2){
        return "BOMB"
    } else {
      return "NOT"
    }
}

isAZero = () => {
  console.log(this.state)
  if(this.props.refs.current?.[this.convertToIndentifier()]?.numberOfBombs === 0){
    return this.arrayOfClick(this.props.i,this.props.j)

  }

  console.log("nope")
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