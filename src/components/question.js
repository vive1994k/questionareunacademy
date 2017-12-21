import React, { Component } from 'react'
import './question.css'
import { values as _values} from 'lodash'

class Question extends Component {
  render () {
  	console.log('props in component', this.props)
  	let questionHeading = '', options = [], optionsTemplate, optionValues

  	if (this.props.currentQuestion) {
  		questionHeading = this.props.currentQuestion.text

  		options = this.props.currentQuestion.options

  		optionValues = _values(options)

  		console.log(optionValues)

	  	optionsTemplate	 = (
  <ol type='A'>
    {optionValues.map(function (thisOptionValue) {
	      		return <li>{thisOptionValue}</li>
	      	})}
  </ol>
	  	)
  	}

    return (
      <div className='question' >
        <div>Javascript Quiz question {this.props.currentQuestionNumber} of {this.props.totalQuestions}</div>
        <div>{questionHeading}</div>
        {optionsTemplate}
        <div className='boxes'>
        	A
        </div>
        <div className='boxes'>
  	   		B
	      </div>
        <div className='boxes'>
        	C
        </div>
        <div className='boxes'>
      		D
        </div>
        <div onClick={this.props.onSkipClick.bind(this, this.props.currentQuestionNumber, ((this.props.currentQuestionNumber + 1) % this.props.totalQuestions))}>Skip</div>
      </div>
    )
  }
}

export default Question
