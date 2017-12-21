import { connect } from 'react-redux'
import Question from '../components/question'
import { findKey as _findKey } from 'lodash'
import { onSkipClickFn } from '../actions/utilities'

const mapStateToProps = state => {
  console.log('container', state)
  let currentQuestionKey = _findKey(state.questions, function (thisQuestion, index) {
    return parseInt(state.currentQuestion) === parseInt(index)
  })

  let totalQuestions = state.questions.length

  return {
    currentQuestion: state.questions[currentQuestionKey],
    totalQuestions: totalQuestions,
    currentQuestionNumber: (state.currentQuestion + 1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSkipClick: (currentQues, NextQues) => {
      dispatch(onSkipClickFn(currentQues, NextQues))
    }
  }
}

const InitialContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default InitialContainer
