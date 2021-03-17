import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from './../actions';

/* state only updated once within this app as a demo
	with more complexity, can add a 'favorite' button to simulate a more real-world use for state changes */
export const initialState = {
	pokemon: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case(FETCH_POKEMON_START): return ({
			...state
		})
		case(FETCH_POKEMON_SUCCESS): return ({
			pokemon: action.payload /* due to it's simplicity, we can replace the whole array fresh on every success */
		})
		case(FETCH_POKEMON_FAILURE): return ({
			...state
		})
		default: return state;
	}
}

export default reducer;