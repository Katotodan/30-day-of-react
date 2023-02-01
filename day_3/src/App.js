import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderNav extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <nav className="p-3 bg-primary text-center">
          <h3>React fundamatal: get started with state</h3>
        </nav>
      </>
    )
  }   
}
class BodyClass extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      incrementBy : 1,
      decrementBy : 1,
      currentValue: 0
    }
  }
  add = () =>{
    this.setState(
      {currentValue : this.state.currentValue + this.state.incrementBy}
    )
  }
  dicriment = ()=>{
    this.setState(
      {currentValue : this.state.currentValue - this.state.decrementBy}
    )
  }
  incrementChanged =(e) =>{
    let num = +e.target.value
    this.setState(
      {incrementBy : num}
    )
  }
  decrementChanged =(e) =>{
    let num = +e.target.value
    this.setState(
      {decrementBy: num}
    )
  }
  render(){
    return(
      <>
        <div className="p-5">
          <p>Increment by : 
            <input type='number' value={this.state.incrementBy}
            onChange={this.incrementChanged}/>
          </p>
          <p>decrement by : 
            <input type='number' value={this.state.decrementBy}
            onChange={this.decrementChanged}/>
          </p>
          <output>value: {this.state.currentValue}</output><br /><br/>
          <button onClick={this.add} className ="btn bg-secondary">Add</button>
          <button onClick={this.dicriment} className ="btn bg-danger ms-3">Discriment</button>
        </div>
        
      </>
    )
  }
}
export {HeaderNav , BodyClass};