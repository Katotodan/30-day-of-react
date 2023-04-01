import SingleFood from "./singleFood"
import React from "react"
const FoodsList = ({url}) =>{
    const [listOfFood, setFoods] = React.useState([])
    let foods = []
    React.useEffect(() =>{
        setFoods([])
        fetch(url)
        .then(res => res.json())
        .then(object => {
            if(object.meals){
                setFoods([])
                object.meals.forEach(element => {
    
                    foods.push(
                        <SingleFood 
                            key= {element.id}
                            title= {element.strMeal} 
                            imgSrc = {element.strMealThumb}
                            id = {element.idMeal}
                            area = {element.strArea}
                            category = {element.strCategory}
                        />
                    ) 
                })  
            }
            
        })
        .then( () => {
            setFoods(foods)
        })
        .catch(error => console.log(error))
    }, [url])
    
    
    return(
        <div className="list--of--food">
            {listOfFood}
        </div>
    )
}

export default FoodsList