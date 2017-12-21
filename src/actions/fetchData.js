export const fetchDataDone = data => {
  return {
    type: 'FETCH_DATA_DONE',
    data: {
    	questions: data
    }
  }
}

export function fetchData () {
  return dispatch => {
    return fetch(`https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json`)
      .then(response => response.json())
      .then(json => dispatch(fetchDataDone(json)))
  }
}
