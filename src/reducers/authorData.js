const initialState = {
  authors: []
};

  const authorData = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTHOR_DATA_DONE':
      return {
        authors: [...(state.authors), action.data.authors]
      }

    default:
      return state
  }
}

export default authorData
