import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import App from './App'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import './index.css'
// import { fetchData } from './actions/fetchData'

const loggerMiddleware = createLogger()

let store = createStore(
		reducers,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)

// store.dispatch(fetchData())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
