const degreeCources = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_DONE':
      return {
        ...state,
        ...(action.data)
      }

    default:
      return state
  }
}

export default degreeCources
