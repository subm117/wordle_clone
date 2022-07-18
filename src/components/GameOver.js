import React, { useContext } from 'react';
import {AppContext} from "../App"; 

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3 id='gameEnd'>{gameOver.guessedWord ? "Hurray!!You Guessed The Word Correctly" : "OOPS!!!Chances Are Over.....Better Luck Next Time"}</h3>
        <h1>Correct Word : {correctWord.toUpperCase()}</h1>
        {gameOver.guessedWord && (<h3>You Guessed The Word In  {currAttempt.attempt} Attempts</h3>)}
    </div>
  )
}

export default GameOver;