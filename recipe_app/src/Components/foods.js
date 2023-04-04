import SingleFood from "./singleFood"
import React from "react"
const FoodsList = ({url , name}) =>{
    const [listOfFood, setFoods] = React.useState([])
    const [load, setLoad] = React.useState(false)
    const [isFood, setIsFood] = React.useState(true)
    let foods = []

    React.useEffect(() =>{
        setFoods(true)
        setLoad(true)
        
        fetch(url)
        .then(res => res.json())
        .then(object => {
            if(object.meals){
                setIsFood(true)
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
            }else{
                setIsFood(false)
            }
            
        })
        .then( () => {
            setFoods(foods)
            setLoad(false)
        })
        .catch(error => console.log(error))
    }, [url])
    
    
    return(
        <div>
            { load && <div className="load">Loading....</div>}

            <div className="list--of--food">  
                {listOfFood}
            </div>
            {
                isFood === false && 
                <div className="not--found">
                    <h2>Sorry, there is no {name} food</h2>
                    <p>Look at your spelling or try another food</p>
                    
                </div>
            }
        </div>
    )
}

export default FoodsList