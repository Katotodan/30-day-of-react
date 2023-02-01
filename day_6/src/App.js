import React from "react";
import { HeaderComponent } from "./components/header";
import { Inputs } from "./components/inputs";
import { ImageViewer } from "./components/imgDisplayer";
import img from "./img";

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      textUp : "",
      textDown : "",
      imgUrl : "IMAGE/head_img.png"
    }
  }
  displayUpText =(text) =>{
    this.setState({textUp: text})
  }
  displayButtomText =(text) =>{
    this.setState({textDown: text})
  }
  changeImg =() =>{
    let randomNumber = Math.floor(Math.random() * 18);
    this.setState({imgUrl: img.imagesUrl[randomNumber]})
  }
  render(){
    
    return(
      <>
        <HeaderComponent/>
        <Inputs text_up={this.displayUpText} text_down={this.displayButtomText} 
        changeImg={this.changeImg}/>
        <ImageViewer imgUrl={this.state.imgUrl} upText={this.state.textUp} 
        bottomText={this.state.textDown}  />
      </>
      
    )
  }
}
