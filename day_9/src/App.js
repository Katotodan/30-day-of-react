import axios from 'axios'
import Header from './Component/right'
import Left from './Component/left'
import React from 'react'

export default function App () {
  const [questions, setQuetiions] = React.useState([])
  function DataSearch(categorie, level, limit){
    const allhiderDiv = document.querySelectorAll('.no--click')
    allhiderDiv.forEach(element =>{
      element.classList.remove('no--click')
    })
    const responses = document.querySelectorAll('.response')
    responses.forEach(response => {
      response.innerHTML =""
      response.style.display = 'none'
    })
    const radios = document.querySelectorAll('.radio')
    radios.forEach(radio => {
      radio.checked = false
    })

    let data = []
    
    axios.get(`https://the-trivia-api.com/api/questions?categories=${categorie}&limit=${limit}&difficulty=${level}`)
    .then(function (response) {
        let data2 = response.data
        data2.forEach(element => {
            data.push({correctAnswer: element.correctAnswer,
                incorrectAnswers : element.incorrectAnswers,
                question: element.question
            })
        });
        setQuetiions(data)
    })
    .catch(function (error) {
        console.log(error);
    })
  }
  return(
    <div className='app'>
      <Left searchData={DataSearch}/>
      <Header questionData ={questions}/>
    </div>
  )
}