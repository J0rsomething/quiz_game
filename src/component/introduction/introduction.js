import React from 'react'
const Introduction = ({history,startAgain}) => (
  <div>
    Introduction Page
    <button onClick={()=>{history.push('/question')}}>START QUIZ</button>
  </div>
)
export default Introduction
