import React from "react";
import FormElmt from "./Component/_form";
import ListItem from "./Component/_list";
import AlertMsg from "./Component/_alert";

function App() {
  
  // const listOfItems = [
  //   {id:"0001", name: "Rent" , amount: 500},
  //   {id:"0002", name: "Rent" , amount: 500},
  //   {id:"0003", name: "Rent" , amount: 500}
  // ]
  // States
  const [charge, setCharge]  = React.useState("")
  const [amount, setAmount]  = React.useState("")
  const [listItem, setListItem] = React.useState(JSON.parse(localStorage.getItem('items')))
  const [editMode, setEditMode] = React.useState(false)
  const [currentId, setCurrentId] = React.useState("")
  const [showAlert, setAlert] = React.useState({hidden:true, text:"", bg:""})
  
  
  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(listItem));
    setListItem(() => JSON.parse(localStorage.getItem('items')))
  }, [listItem])
  
  let amounts = 0;
  listItem.forEach(item => {
    amounts += Number(item.amount)
  })
  const viewAlert = (text, bgColor)=>{
    setAlert({hidden:false, text:text, bg:bgColor})
    setTimeout(() => {
      setAlert({hidden:true, text:"", bg:""})
    }, 3000);
  }
  const handleFormSub = (e) =>{
    e.preventDefault()
    if(charge && amount){
      if(!editMode){
        setListItem([...listItem,{id:Date.now(), name: charge , amount: amount}])
        viewAlert("Item added successfully", "successBg")
      }else{
        setListItem(listItem.map(element =>{
          if(element.id === currentId){
            return({
              id : currentId, 
              name : charge,
              amount :amount
            })
          }
          return element
        }))
        viewAlert("Item edited successfully", "successBg")
        setEditMode(false)
        setCurrentId("")
      }
      
      setCharge("")
      setAmount("")
    }else{
      viewAlert("Set charge and the amount must be super than 0", "failBg")
    }
    

  }
  const handleCharge = (e) =>{
    e.target.name === "charge" ? setCharge(e.target.value) : setAmount(e.target.value)

  }
  const deleteAll = () => {
    setListItem([])
    viewAlert("All items has been deleted", "failBg")
  }
  const deleteOne = (id) =>{
    const temp = listItem.filter(item => item.id != id)
    setListItem(temp)
    viewAlert("Item deleted", "failBg")
  }
  const edit = (id) =>{
    const temp = listItem.filter(item => item.id === id)
    setCurrentId(id)
    setCharge(temp[0].name)
    setAmount(temp[0].amount)
    setEditMode(true)
  }
  
  return (
    <div>
      <h2>Budget Calculator</h2>
      <AlertMsg 
        view={showAlert.hidden} 
        text={showAlert.text}
        backgroundColor={showAlert.bg}
      />
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
          edit ={edit}
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

// Working on the use effect warning

