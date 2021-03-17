import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/index';
/* import logger from 'redux-logger'; */
import thunk from 'redux-thunk';

import DisplayData from './components/DisplayData';

import './App.css';

function App() {
	return (
		/* <Provider store={createStore(reducer, applyMiddleware(logger))}> */
		<Provider store={createStore(reducer, applyMiddleware(thunk))}>
			<div id='app'>
				<DisplayData />
			</div>
		</Provider>
	)
}

export default App;

/*
	Theme:
		Bluish: #20232A
		Dark Bluish: #0D1117
		Dark Gray: #181A1B
		Near Black: #0D0D0D
*/