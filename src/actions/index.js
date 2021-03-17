import axios from 'axios';

export const FETCH_COINS_START = 'FETCH_COINS_START';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_FAILURE = 'FETCH_COINS_FAILURE';

export const getCoins = () => dispatch => {
	dispatch({ type: FETCH_COINS_START});
	axios.get('https://api.coinranking.com/v2/coins')
		.then(res => dispatch({ type: FETCH_COINS_SUCCESS }))
		.catch(err => dispatch({ type: FETCH_COINS_FAILURE }))
}