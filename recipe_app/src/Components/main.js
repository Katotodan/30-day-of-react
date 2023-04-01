import SearchBar from "./searchBar"
import "../../src/index.css"
import FoodsList from "./foods";
import React from "react"


function Main() {
  const [url, setUrl] = React.useState("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  const [foodName, setFoodName] = React.useState("")
  const searchChanges = (e) =>{
    setFoodName(e.target.value)
  }

  const handleSubmition = (e) =>{
    e.preventDefault()
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    
  }
  return (
    <div className="bg-dark-subtle main">
      < SearchBar 
        searchChanges= {searchChanges} 
        sub= {handleSubmition}/>
      < FoodsList 
        url = {url}
      />
    </div>
  );
}

export default Main;