import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Game = ({myChoice, score, setScore}) => {

  const [house, setHouse] = useState("")
  const [playerWin, setPlayerWin] = useState("")
  const [counter, setCounter] = useState(3)

  const newHousePick = () =>{
    const choices=["rock","paper","scissors"]
    setHouse(choices[Math.floor(Math.random()*3)])
  }

  

  const Result = () =>{
    
    if(myChoice==="rock" && house === "scissors"){
      setPlayerWin("win")
      setScore(score+1)
    }else if(myChoice==="rock" && house === "paper"){
      setPlayerWin("lose")
      setScore(score-1)

    }else if(myChoice==="scissors" && house === "paper"){
      setPlayerWin("win")
      setScore(score+1)

    }else if(myChoice==="scissors" && house === "rock"){
      setPlayerWin("lose")
      setScore(score-1)

    }else if(myChoice==="paper" && house === "rock"){
      setPlayerWin("win")
      setScore(score+1)

    }else if(myChoice==="paper" && house === "scissors"){
      setPlayerWin("lose")
      setScore(score-1)

    }else{
      setPlayerWin("draw")
    }

  }

  //It is called every time the component is renderized
  useEffect(() => {
    newHousePick()
  }, [])
  
  //It is called every time the house state change , the component it will change
  useEffect(() => {

    const timer= counter>0 ? setInterval(() => {
      setCounter(counter-1)
    }, 1000) : Result();

    return () =>{
      clearInterval(timer) //I clean the interval so doesnt go forever
    }
    
  }, [counter,house])
  


  return (
    <div className="game">

        <div className="game__you">
            <span className="text">You picked</span>
        
          <div className={`icon icon--${myChoice} ${playerWin==="win"?`icon icon--${myChoice}--winner`:""}`}></div>
        </div>
          {playerWin==="win" && <div className="game__play">
            <span className="text">You Win</span>
            <Link to="/" className='play-again' onClick={() => setHouse()}>Play again</Link>
          </div>}

          {playerWin==="lose" && <div className="game__play">
            <span className="text">You Lose</span>
            <Link to="/" className='play-again' onClick={() => setHouse()}>Play again</Link>
          </div>}

          {playerWin==="draw" && <div className="game__play">
            <span className="text">Draw</span>
            <Link to="/" className='play-again' onClick={() => setHouse()}>Play again</Link>
          </div>}

          
          <div className="game__house">
              <span className="text">The house picked</span>
              {
                counter === 0 ?<div className={`icon icon--${house} ${playerWin==="lose"?`icon icon--${house}--winner`:""}`}></div>
                : <div className="counter">{counter}</div>
              }
          </div>

        
       
    </div>
  )
}

export default Game

/* My choice:{myChoice} <br/>
      House choice:{house} <br/>

      Result:
        {playerWin==="win" && <h2>You Win</h2>}
        {playerWin==="lose" && <h2>You Lose</h2>}
        {playerWin==="draw" && <h2>Draw</h2>}

        <Link to="/" onClick={() => setHouse()}>Play again</Link> */