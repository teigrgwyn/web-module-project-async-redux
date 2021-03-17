import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';

import DisplayData from './components/DisplayData';

import './App.css';

function App() {
	return (
		<Provider store={createStore(reducer)}>
			<div id='app'>
				<DisplayData />
			</div>
		</Provider>
	);
}

export default App;

/*
	Theme:
		Bluish: #20232A
		Dark Bluish: #0D1117
		Dark Gray: #181A1B
		Near Black: #0D0D0D
*/