import React from 'react';

import { connect } from 'react-redux';

import { getData } from '../actions/index';

function DisplayData(props) {
	return (
		<button id='button' onClick={() => props.getCoins()}>Get Data</button>
	)
}

const mapStateToProps = state => {
	return {
		placeholder: state.placeholder
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getCoins: () => dispatch(getData())
	}
}

//export default connect(mapStateToProps, { getData })(DisplayData);
export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);