import {GET_NEXT_FACTORIAL, GET_CURRENT_FACTORIAL, GET_PREVIOUS_FACTORIAL} from '../actions/index';

export const getNextFactorial = (numb) => dispatch => {
	dispatch({type: GET_NEXT_FACTORIAL, payload: numb});
};

export const getPreviousFactorial = (numb) => dispatch => {
	dispatch({type: GET_PREVIOUS_FACTORIAL, payload: numb});
};

export const getCurrentFactorial  = (numb) => dispatch => {
	dispatch({type: GET_CURRENT_FACTORIAL, payload: numb});
};