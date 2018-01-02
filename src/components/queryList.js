import React, { Component } from 'react'
import {map as _map, find as _find, isEmpty as _isEmpty} from 'lodash'

class QueryList extends Component {
  getAuthorSubmissionCount(userName){
  	let currentAuthor = _find(this.props.authors, (thisAuthor) => {
  		return thisAuthor.username === userName;
  	});

  	if(!_isEmpty(currentAuthor)) {
  		return currentAuthor.submission_count;
  	} else {
  		this.props.getAuthorData(userName)
  	}
  	
  }

  render () {
  	let page = parseInt(this.props.page);
  	let _self = this;
  	let tableRows = _map(this.props.hits, (thisHit)=>{
  		let title,url, author, submission_count=setTimeout(_self.getAuthorSubmissionCount(thisHit.author), 3000);

  		if(thisHit.title){
  			title = thisHit.title;
  			url = thisHit.url;
  		} else {
  			title = thisHit.story_title;
  			url = thisHit.story_url;
  		}

  		author = thisHit.author;
  		return (<tr> 
  		  			<td><a href={url} target='_blank'>{title}</a></td>
  		  			<td>{author} ({submission_count})</td>
  		  		</tr>);
  	});
    return (
      <div className='queryList'>
        <table className={tableRows.length?'': 'hide-display'}>
        	<tr >
    			<th className="table-heading left">Title</th>
    			<th className="table-heading">Author (Submission Count)</th>
  			</tr>
  			{tableRows}
        </table>
        <button className={this.props.page?'':'hide-display'}
        	onClick={this.props.nextClickHandler.bind(this, (page-1), this.props.searchedValue)}>Previous
       	</button>
        <button 
        	className={tableRows.length?'':'hide-display'} 
        	onClick={this.props.nextClickHandler.bind(this, (page+1), this.props.searchedValue)}>Next
        </button>

      </div>
    )
  }
}

export default QueryList
