import { GET_DATA } from './../actions';

export const initialState = {
	placeholder: 0
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case(GET_DATA): return ({
			...state
		})
		default: return state;
	}
}

export default reducer;