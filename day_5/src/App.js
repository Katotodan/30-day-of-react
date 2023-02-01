import React from "react"
function NavBar(props){
  return(
    <>
      <h2 className="bg-primary text-center py-3 text-white" >{props.title}</h2>
    </>
  )
}

class InputElmnt extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      inputValue : "",
    } 
  }
  handleChange = (e) =>{
    this.setState({inputValue: e.target.value})
  }
  handleSub =(e) =>{
    e.preventDefault()
    this.props.sub(this.state.inputValue)
    this.setState({inputValue : ""})
  }

  render(){
    return(
      <>
        <form className="text-center">
          <h3>Input item</h3>
          <input type="text" className="p-1" value={this.state.inputValue} 
          onChange={this.handleChange}/>
          <button type="submit" className="btn m-2" onClick={this.handleSub}>
            {this.props.btnText}
          </button>
        </form>
        
      </>
    )
  }
}

class OutPutList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let item = this.props.items.map(el =><li key={el}>{el}</li>)
    return(
      <>
        <ul>{item}</ul>
      </>
    )
  }
}

export {NavBar, InputElmnt, OutPutList}