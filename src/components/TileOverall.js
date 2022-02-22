import React from "react";

class TileOverall extends React.Component {
    constructor(props) {
            super(props)
            this.state = {
                gbSize:props.gbSize,
                tileHieght:props.tileHieght,
                tileWidth:props.tileWidth
            };
            this.parentRef = React.createRef();
          }

        bombGenerator = (x) =>{
                let bombNumber = Math.floor((Math.random() * x))
                return bombNumber
        }

        children = () =>{
            console.log(this.parentRef.current)
        }

          thisConsole = () => {
            console.log(this)
          }
          

            
   gameBoardGenerator = () => [...Array(this.props.gbSize)].map((_, i) =>[...Array(this.props.gbSize)].map((_, j) =>
  <Tile
  key = {j}
  i={i}
  j={j}
  width = {this.props.tileWidth}
  height = {this.props.tileHieght}
  bombStatus = {this.bombGenerator(4)}
  backgroundColor = {"yellow"}
  ref = {this.parentRef}

  />))


            
    render() {
        const variable = 5;
        return (
            <div className = "outerDiv">
            <div className="gameboard">
               {this.gameBoardGenerator()}
               {this.children()}
        
            </div>
            </div>
        );
    }
}

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color:props.color,
            ref:props.ref

        };
      }

handleClick = () =>{
    this.setState({color:"black"})
    this.setState({backgroundColor:"blue"})
    console.log(this.props.ref)
    console.log(this)
  }

  convertToIndentifier = () =>{
    if(this.props.bombStatus > 2){
        return "BOMB"
    } else {
        return `${this.props.i}${String.fromCharCode(97 + this.props.j)}`
    }
}


  handleContext = (e) =>{
    e.preventDefault()
    this.setState({backgroundColor:"red"})
  }


    render() {
        return <>
        <button
        onClick = {this.handleClick}
        onContextMenu = {this.handleContext}
        className = "tile"
        style={{ height : this.props.height, width: this.props.width, backgroundColor:this.state.backgroundColor }}
        >
        {this.convertToIndentifier()}
        </button>
        </>

    }
}

export default TileOverall;

