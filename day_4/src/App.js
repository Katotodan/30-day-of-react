import React from "react";
function HeaderComponent(){
  return(
    <>
      <h4>Simple TODO list with react</h4>
    </>
  )
}
class InputList extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      list:[], 
      inputValue: ""
    }
  }
  
  changed = (e) =>{
    this.setState({inputValue: e.target.value})
  }
  subFunction = (e)=>{
    e.preventDefault()
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ""
    })
  }
  
  render(){
    let item = this.state.list.map(el => <li  key={el.toString()}>{el}</li>)
    return(
      <>
        <form>
          <input type="text" value={this.state.inputValue} 
          onChange={this.changed}/>
          <button type="submit" onClick={this.subFunction}>add</button>
        </form>
        <div>
          <p>List</p>
          <ul>{item}</ul>
        </div>
      </>
    )
  }
}

export {HeaderComponent, InputList}