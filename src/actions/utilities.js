export function setSearchedValue (searchedValue) {
  return {
    type: 'SET_SEARCHED_VALUE',
    data: {
      searchedValue: searchedValue
    }
  }
}