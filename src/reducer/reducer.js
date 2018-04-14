//action names
const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
const START_AGAIN = 'START_AGAIN'


const init_state = {
  user_answers: []
}

//reducer

const computeNewArray = (array, data) => {
  let result = array.slice(0)
  console.log(`index:${data.index}   data:${data.answer}`)
  result[data.index] = data.answer
  return result
}

const quiz_reducer = (state=init_state, action) => {
  switch(action.type) {
    case QUESTION_ANSWERED:
      return {...state,
        user_answers: computeNewArray(state.user_answers, action.data)
      }
    case START_AGAIN:
      return init_state
    default:
      return state
  }
}

//action creators
const onQuestionAnswer = ({index, answer}) => ({
  type: QUESTION_ANSWERED,
  data: {index, answer}
})

const onStartAgain = () => ({
  type: START_AGAIN
})


//functions
// const questionAnswer = data => {
//   console.log(data)
//   return dispatch => dispatch(onQuestionAnswer(1))
// }
//
// const startAgain = () => {
//   return dispatch => dispatch(onStartAgain())
// }

export {quiz_reducer, onQuestionAnswer, onStartAgain}
