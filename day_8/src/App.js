import React from "react";
import Nav from "./Component/nav";
import Input from "./Component/form"
import List from "./Component/list";


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.addItem = this.addItem.bind(this)
    this.state ={
      arr : []
    }
  }
  addItem =(name, mark) =>{
    this.setState({arr: [...this.state.arr, {name: name, mark:mark}]})
  }
  render(){
    return(
      <>
        <Nav />
        <Input add={this.addItem}/>
        <List lists={this.state.arr}/>
      </>
    )
  }
}