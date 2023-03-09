import React from "react"

export default function NewData (props){
    const [score, setScore] = React.useState(0)
    function handleRadioClick (event){
        event.target.parentNode.parentNode.classList.add('no--click')
        if(event.target.value == event.target.parentNode.parentNode.children[6].innerHTML){
            event.target.parentNode.parentNode.children[6].style.display ="block"
            event.target.parentNode.parentNode.children[6].innerHTML += `✔`
            setScore(score +1)
        }else{
            event.target.parentNode.parentNode.children[5].style.display ="block"
            event.target.parentNode.parentNode.children[5].innerHTML =`${event.target.value} ❌`
            event.target.parentNode.parentNode.children[6].style.display ="block"
            event.target.parentNode.parentNode.children[6].innerHTML += `✔`
        }
    }
    let  newData = []
    if(props.questionData.length>0 ){
        newData = props.questionData
        newData = newData.map((element, index2) =>{
            function shuffle(array) {
               array.sort(() => Math.random() - 0.5);
            }
            let answer = [...element.incorrectAnswers, element.correctAnswer]
            shuffle(answer)
            answer = answer.map((el, index )=>{
                return(
                    <div key={index}>
                        <input 
                        name={index2} 
                        type="radio" 
                        id={`${index2}+${index}`} 
                        onChange={handleRadioClick}
                        className="radio"
                        value={el}
                        />
                        <label htmlFor={`${index2}+${index}`}>{el} </label>
                    </div>
                    
                )
            })
            return(
                <div key={index2} className="question--div">
                    <p>{element.question}</p>
                    {answer}
                    <p className="your--answer response"></p>
                    <p className="correct-answer response">{element.correctAnswer}</p>
                </div>
            )
        })
    }
    return( 
        <div>
            <p>Score: {score}/{newData.length}</p>
            <div className="questions">
                {newData}
            </div>
        </div>  
        
    )
}

