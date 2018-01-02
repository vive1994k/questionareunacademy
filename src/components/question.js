import React, { Component } from 'react'
import './question.css'
import { values as _values} from 'lodash'
import Search from './search'
import QueryList from './queryList'

class Question extends Component {
  render () {
  	
    return (
      <div className='question' >
        <Search searchHandler={this.props.searchHandler}/>
        <QueryList 
          hits={this.props.hits} 
          page={this.props.page} 
          searchedValue={this.props.searchedValue}
          nextClickHandler={this.props.nextClickHandler}
          getAuthorData={this.props.getAuthorData}
          authors={this.props.authors}/>
      </div>
    )
  }
}

export default Question
