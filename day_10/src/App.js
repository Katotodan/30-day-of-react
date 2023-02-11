import React from "react";
import Form from "./form";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      element : ''
    }
    this.displayer = this.displayer.bind(this)
  }
  
  displayer = (el) =>{
    this.setState({element : el})
  }
  render(){
    let newDiv
    if(this.state.element){
       newDiv = <>
       <h6>email : {this.state.element.email}</h6>
       <h6>password:{this.state.element.password}</h6>
       <h6>password2: {this.state.element.passwordConfirmation}</h6>
       <h6>newsletter: {this.state.element.newsletter === true ? 'true' : 'false'}</h6>
      </>
    }
    
    return(
      <div className="bg-primary rootApp">
        <Form sub={this.displayer}/>
        {newDiv && 
          <div className="container">
            <h6>The entered values are :</h6>{newDiv}
          </div> 
        }
      </div>
    )
  }
}