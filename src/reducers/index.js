import { FETCH_COINS_START, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from './../actions';

export const initialState = {
	placeholder: 0
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case(FETCH_COINS_START): return ({
			...state
		})
		case(FETCH_COINS_SUCCESS): return ({
			...state
		})
		case(FETCH_COINS_FAILURE): return ({
			...state
		})
		default: return state;
	}
}

export default reducer;