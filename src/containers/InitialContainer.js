import { connect } from 'react-redux'
import Question from '../components/question'
import { setSearchedValue } from '../actions/utilities'
import { fetchData, fetchAuthorData } from '../actions/fetchData'

const mapStateToProps = state => {
  console.log('InitialContainer', state);
  return {
    hits: state.searchedList.hits||[],
    page: state.searchedList.page,
    searchedValue: state.misc.searchedValue || '',
    authors: state.authorData.authors || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchHandler: (searchValue) => {
      let url = 'http://hn.algolia.com/api/v1/search.json?query=' + searchValue;
      dispatch(fetchData(url))
      dispatch(setSearchedValue(searchValue))
    },
    nextClickHandler: (page, searchValue='') => {
      let url = 'http://hn.algolia.com/api/v1/search.json?query=' + searchValue + '&page=' + page;
      dispatch(fetchData(url))
    },
    getAuthorData: (userName) => {
      let url = 'https://hn.algolia.com/api/v1/users/' + userName;

      dispatch(fetchAuthorData(url))
    }
  }
}

const InitialContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default InitialContainer
