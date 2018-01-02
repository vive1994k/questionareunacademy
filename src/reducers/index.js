import { combineReducers } from 'redux'
import authorData from './authorData'
import searchedList from './searchedList'
import misc from './misc'

export default combineReducers({
  authorData,
  searchedList,
  misc
})