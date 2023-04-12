import './index.css';
import {useState} from 'react';
import tester from './tester';

function App() {
  const [startIcon, setStartIcon] = useState("X")
  const [clickTime, setClickTime] = useState(0)
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [tie, setTie] = useState(0)
  const [start, setStart] = useState(false)
  
  const allSpan = document.querySelectorAll('.spanElmt')

  const endGame = (icon) =>{
    if(icon === "X"){
      setScore1(score1 + 1)
    }else if(icon === "0"){
      setScore2(score2 + 1)
    }else{
      setTie(tie + 1)
    }
    allSpan.forEach(element => element.classList.add('clicked'))
    setStart(true)
  }
  
  const restart = () => {
    allSpan.forEach(element => element.classList.remove('clicked'))
    allSpan.forEach(element => element.innerHTML = "")
    setStart(false)
    setClickTime(0)
  }
  const handleClick = (e) =>{
    if(!e.target.classList.contains('clicked')){
      setClickTime(clickTime+1)
      e.target.classList.add('clicked')
      e.target.innerHTML = startIcon
      const win = tester(e.target.parentNode.parentNode, startIcon)
      setStartIcon(startIcon === "X" ? "0" : "X")
      if(!win){
        if(clickTime === 8){
          endGame("")
        }
      }else{
        endGame(startIcon)
      }
      
      
    }
    
  }
  return (
    <div className="App">
      <div className='box'>
        <div>
          <span id='1' onClick={handleClick} className='spanElmt'></span>
          <span id='2' onClick={handleClick} className='spanElmt'></span>
          <span id='3' onClick={handleClick} className='spanElmt'></span>
        </div>
        <div>
          <span id='4' onClick={handleClick} className='spanElmt'></span>
          <span id='5' onClick={handleClick} className='spanElmt'></span>
          <span id='6' onClick={handleClick} className='spanElmt'></span>
        </div>
        <div>
          <span id='7' onClick={handleClick} className='spanElmt'></span>
          <span id='8' onClick={handleClick} className='spanElmt'></span>
          <span id='9' onClick={handleClick} className='spanElmt'></span>
        </div>
      </div>
      <footer>
        <h4>Score</h4>
        <div>
          <span>Play 1</span> <span>Tie </span> <span>Play 2</span>
        </div>
        <div>
          <span>{score1}</span> <span>{tie}</span> <span>{score2}</span>
        </div>
        {start && <button onClick={restart}>Start Again</button>}
      </footer>
    </div>
    
  );
}

export default App;
