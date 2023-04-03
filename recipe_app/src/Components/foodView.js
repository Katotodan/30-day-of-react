import React from "react"
import "../../src/index.css"

const FoodView = ({id}) =>{
    const [foodName,setFoodName] = React.useState("")
    const [foodArea,setFoodArea] = React.useState("")
    const [foodCategory,setFoodCategory] = React.useState("")
    const [foodIngredient,setFoodIngredient] = React.useState([])
    const [foodInstructions,setFoodInstructions] = React.useState("")
    const [foodPicture,setFoodPicture] = React.useState("")
    const [foodMeasure,setFoodMeasure] = React.useState([])
    const [foodVideo,setFoodVideo] = React.useState("")

    React.useEffect(() =>{
        let ingredientList = []
        let measureList = []
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(object => (object.meals[0]))
        .then(element => {
            for(const keyElmnt in element){
                if(/^strIngredient/.test(keyElmnt) && element[keyElmnt]){
                    ingredientList.push(element[keyElmnt])
                }
                if(/^strMeasure/.test(keyElmnt) && element[keyElmnt] ){
                    measureList.push(element[keyElmnt])
                }
                
            }
            console.log(element)
            setFoodName(element.strMeal)
            setFoodArea(element.strArea)
            setFoodCategory(element.strCategory)
            setFoodInstructions(element.strInstructions)
            setFoodPicture(element.strMealThumb)
            setFoodVideo(element.strYoutube)

        })
        .then( ()=>{
            setFoodIngredient(ingredientList)
            setFoodMeasure(measureList)
        })
        .catch(error => console.log( {"error": error}))
    }, [id])
    const list = foodIngredient.map((element,index) =>{
        return(
            <div className="list">
                <li>{element}: {foodMeasure[index]} </li>
            </div>
        )
    })
    return(
        <div className="view--food">
            <h2>{foodName}</h2>
            <img src={foodPicture} alt="Food picture"/>
            <p>Area: {foodArea}</p>
            <p>Category: {foodCategory}</p>
            <h4>Ingredient and measurement</h4>
            {list}

            <h4>Instruction</h4>
            <p>{foodInstructions}</p>
            
            <a href={foodVideo}>Click to View the video</a>

        </div>
    )
}
export default FoodView