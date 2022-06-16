import React from 'react'
import { Link } from 'react-router-dom'

//Import images (rock,scissors,paper)
import Triangle from "../images/bg-triangle.svg"

const Play = ({setMyChoice}) => {

  const setChoice = (e) =>{
    setMyChoice(e.target.dataset.id)
  }

  return (

    <div className='play'>
    
        <img src={Triangle} alt="" className='triangle' />

        <div className="items">
            <Link to="game">
              <div data-id='paper' className="icon icon--paper" onClick={setChoice}>
              
              </div>
            </Link>

            <Link to="game">
              <div data-id='scissors' className="icon icon--scissors" onClick={setChoice}>
                    
              </div>
            </Link>

            <Link to="game">
              <div data-id='rock' className="icon icon--rock" onClick={setChoice}>
            
              </div>
            </Link>
        </div>

    </div>
  )
}

export default Play