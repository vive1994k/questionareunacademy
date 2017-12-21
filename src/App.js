import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import InitialContainer from './containers/InitialContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <InitialContainer />
      </div>
    )
  }
}

export default App
