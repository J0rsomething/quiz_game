import React from 'react'
import {connect} from 'react-redux'
import {onQuestionAnswer} from '../../reducer/reducer'

const mapDispatchToProps = ({
  onQuestionAnswer
})


const Question = ({index, question, onQuestionAnswer}) => (
  <div>
    <h2>{question}</h2>
    <br />
    <button onClick={()=>onQuestionAnswer({index, answer:true})}>True</button>
    <button onClick={()=>onQuestionAnswer({index, answer:false})}>False</button>
  </div>
)
export default connect(
  null,
  mapDispatchToProps
)(Question)
