import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {NavBar,InputElmnt,OutPutList} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
class Application extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      arr : []
    }
  }
  add = (newValue) => {
    this.setState({arr: [...this.state.arr, newValue]})
  }
  render(){
    return(
      <>
        <NavBar title="TO DO LIST"/>
        <InputElmnt btnText="Add Item" sub ={this.add}/>
        <OutPutList items={this.state.arr}/>
      </>
    )
  }
}
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
