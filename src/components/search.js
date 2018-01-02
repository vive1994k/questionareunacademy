import React, { Component } from 'react'
import './question.css'
import { values as _values} from 'lodash'

class Search extends Component {
  constructor(props){
  	super(props);

  	this.state = {
  		searchedField: ''
  	};
  }

  handleChange(event){
  	let newSearch = event.target.value;

  	this.setState({
  		searchedField: newSearch
  	});
  }

  clickHandler(){
  	this.props.searchHandler(this.state.searchedField);
  }

  render () {
  	
    return (
      <div >
        <input placeholder="Type here" value={this.state.searchedField} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.clickHandler.bind(this)}>Search</button>
      </div>
    )
  }
}

export default Search