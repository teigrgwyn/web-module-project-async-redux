import React from 'react';

import { connect } from 'react-redux';

import { getPokemon } from '../actions/index';

function DisplayData(props) {
	return (
		<div id='displaydata'>
			<button id='button' onClick={() => props.getPokemon()}>Get Data</button>
			<div id='pokemon'>
				{
					/* the mapped data would usually be directed to another component, but keeping it here for simplicity */
					props.pokemon.map((poke, index) => {
						return (
							<div class='poke' key={index}>
								{poke.name}
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getPokemon: () => dispatch(getPokemon())
	}
}

//export default connect(mapStateToProps, { getData })(DisplayData);
export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);