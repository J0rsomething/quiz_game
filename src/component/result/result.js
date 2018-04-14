import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {onStartAgain} from '../../reducer/reducer'
import questions from '../../constants'



const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = ({
  onStartAgain
})


class Result extends React.Component {


  render() {
    return(
      <div>
        {
          this.props.user_answers.length !==0? null:<Redirect to='/' />
        }
        <h2>Result Page</h2>
        <ul>
          {
            questions.map((item,index)=>{
              return <li key={index}>{`[${item.answer == this.props.user_answers[index]? '+':'-' }]${item.answer}: ${item.question}`}</li>
            })
          }
        </ul>
        <button onClick={()=>{
          this.props.onStartAgain()
          this.props.history.replace('/')
        }}>Play Again</button>
      </div>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)
