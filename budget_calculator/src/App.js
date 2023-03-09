import React from "react";
import FormElmt from "./Component/_form";
import ListItem from "./Component/_list";
import AlertMsg from "./Component/_alert";

function App() {
  const listOfItems = [
    {id:"0001", name: "Rent" , amount: 500},
    {id:"0002", name: "Rent" , amount: 500},
    {id:"0003", name: "Rent" , amount: 500}
  ]
  // States
  const [charge, setCharge]  = React.useState("")
  const [amount, setAmount]  = React.useState("")
  const [listItem, setListItem] = React.useState(listOfItems)
  
  let amounts = 0;
  listItem.forEach(item => {
    amounts += Number(item.amount)
  })
  const handleFormSub = (e) =>{
    e.preventDefault()
    if(charge && amount){
      setListItem([...listItem,{id:Date.now(), name: charge , amount: amount}])
      setCharge("")
      setAmount("")
    }

  }
  const handleCharge = (e) =>{
    e.target.name === "charge" ? setCharge(e.target.value) : setAmount(e.target.value)

  }
  const deleteAll = () => setListItem([])
  const deleteOne = (id) =>{
    const temp = listItem.filter(item => item.id != id)
    setListItem(temp)
  }
  const edit = (id) =>{
    
  }
  
  return (
    <div>
      <h2>Budget Calculator</h2>
      <AlertMsg/>
      <div className="core--app">
        <FormElmt 
          formSubmition={handleFormSub}
          handleCharge = {handleCharge}
          charge = {charge}
          amount = {amount}

        />
        <ListItem 
          list = {listItem}
          deleteAll ={deleteAll}
          deleteOne = {deleteOne} 
        />
      </div>
      <div className="amont--div">
        Total spending :
        <span className="total--amount">${amounts}</span>
      </div>
      
    </div>
  );
}

export default App;

// Working on edit
