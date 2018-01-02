const miscData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCHED_VALUE':
      return {
        ...state,
        searchedValue: action.data.searchedValue
      }

    default:
      return state
  }
}

export default miscData