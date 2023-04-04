import SearchBar from "./searchBar"
import "../../src/index.css"
import FoodsList from "./foods";
import React, { useEffect } from "react"
import FoodView from "./foodView";
import {Route, Routes, useLocation} from "react-router-dom"


function Main() {
  const [url, setUrl] = React.useState("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  const [foodName, setFoodName] = React.useState("")
  const [foodName2, setFoodName2] = React.useState("")

  let location = useLocation()

  const searchChanges = (e) =>{
    setFoodName(e.target.value)
  }
  
  const handleSubmition = (e) =>{
    e.preventDefault()
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    location.pathname = "/"
    setFoodName2(foodName)
    setFoodName("")
  }
  return (
    <div className="bg-dark-subtle main">
      < SearchBar 
        searchChanges= {searchChanges} 
        sub= {handleSubmition}
        value = {foodName}
      />
      <Routes>
        <Route path="/" element= { <FoodsList url = {url} name={foodName2}/> } />
        <Route path="/:id" element= { <FoodView/> } />
      
      </Routes>
      

    </div>
  );
}

export default Main;