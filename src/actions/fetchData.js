export const fetchDataDone = data => {
  return {
    type: 'FETCH_DATA_DONE',
    data: data
  }
}

export const fetchAuthorDataDone = data => {
  return {
    type: 'FETCH_AUTHOR_DATA_DONE',
    data: {
      authors: data
    }
  }
}

export function fetchData (url) {
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchDataDone(json)))
  }
}

export function fetchAuthorData (url) {
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchAuthorDataDone(json)))
  }
}