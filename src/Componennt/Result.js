import React from 'react'

function Result(props) {
  return (
    <>
    <div className='show-score'>
        <h1>Result</h1>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default Result;