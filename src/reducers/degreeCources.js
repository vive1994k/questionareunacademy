const initialState = {
  currentQuestion: 0,
  questions: []
}

const degreeCources = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_DONE':
      return {
        ...state,
        questions: (action.data.questions),
        currentQuestion: 0
      }

    case 'SKIP_BUTTON_CLICKED':
      return {
        ...state,
        currentQuestion: action.data.nextQuestion
      }

    default:
      return state
  }
}

export default degreeCources
