import React from "react";
import box from "./box"

class SingleBox extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      isOn: this.props.on
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () =>{
    this.setState({isOn: !this.state.isOn})
  }
  render(){
    const styles = {
      backgroundColor: this.state.isOn ? '#ccc' : '#000'
    }
    return(
      <div className="square" style={styles} onClick={this.handleClick}></div>
    )
    
  }
}

export default class Boxes extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let squares = box.map( (el) => <SingleBox key={el.id} on={el.on}/>)
    return(
      <>
        {squares}
      </>
      
    )
  }
}