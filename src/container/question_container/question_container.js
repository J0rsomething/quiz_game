import React, {Component} from 'react'
import {connect} from 'react-redux'
import questions from '../../constants'
import {onQuestionAnswer} from '../../reducer/reducer'
import Question from '../../component/question/question'

const mapStateToProps = state => ({
  farest_answered: state.user_answers.length-1
})
const mapDispatchToProps = ({
  onQuestionAnswer
})

const QUIZ_LENGTH = questions.length

class QuestionContainer extends Component {
  constructor() {
    super()

    //to support next and prev function...
    this.state = {
      //question index current showed
      current:0,
    }

    this._handleNext = this._handleNext.bind(this)
    this._handlePrevious = this._handlePrevious.bind(this)
    this._nextButton = this._nextButton.bind(this)
    this._previousButton = this._previousButton.bind(this)
  }


  //when NEXT button clicked
  _handleNext() {
    this.setState({
      current: this.state.current+1
    })
  }

  //when PREVIOUS button clicked
  _handlePrevious() {
    this.setState({
      current: this.state.current-1
    })
  }

  //decide NEXT button status
  _nextButton() {
    if(this.state.current !== QUIZ_LENGTH-1) {
      if(this.state.current <= this.props.farest_answered) {
        return <button onClick={this._handleNext}>Next</button>
      } else {
        return <button disabled>Next</button>
      }
    } else { //reach end of the quiz. will show result if clicked
      if(this.props.farest_answered < QUIZ_LENGTH-1){
        return <button disabled>Result</button>
      } else {
        return <button onClick={this._handleNext}>Result</button>
      }
    }
  }

  //decide PREVIOUS button status
  _previousButton() {
    if(this.state.current === 0) {
      return null
    } else {
      return <button onClick={this._handlePrevious}>Previous</button>
    }
  }


  render() {
    const QuestionArray = questions.map((item, index)=>
      <div>
        <h2>{item.question}</h2>
        <button onClick={()=>this.props.onQuestionAnswer({index, answer: 'True'})}>True</button>
        <button onClick={()=>this.props.onQuestionAnswer({index, answer: 'False'})}>False</button>
      </div>
    )
    console.log(this.state)

    return(
      <div>
        Question Container
        <br />
        {
          this.state.current < QUIZ_LENGTH?
            QuestionArray[this.state.current]:
            this.props.history.replace('/result')
        }
        <br />
        {
          this._previousButton()
        }
        {
          this._nextButton()
        }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer)
