
export function onSkipClickFn (currentQuestion, nextQuestion) {
  return {
    type: 'SKIP_BUTTON_CLICKED',
    data: {
      nextQuestion: nextQuestion,
      userAnwered: 'S'
    }
  }
}
