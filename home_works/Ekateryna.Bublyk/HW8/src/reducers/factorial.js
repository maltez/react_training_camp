import {GET_NEXT_FACTORIAL, GET_CURRENT_FACTORIAL, GET_PREVIOUS_FACTORIAL} from '../actions/index';
import GetFactorial from '../business_logic/getFactorial';

const init = {
	nextValue: 0,
	previousValue: 0,
	currentValue: 0
};

export default (state = init, {type, payload}) => {
	switch (type) {
		case 'GET_NEXT_FACTORIAL':
			let next = +payload + 1;
			let nextValue = GetFactorial.getFactorial(next);
			return Object.assign({}, state, {nextValue});
		case 'GET_PREVIOUS_FACTORIAL':
			let previous = +payload - 1;
			let previousValue = GetFactorial.getFactorial(previous);
			return Object.assign({}, state, {previousValue});
		case 'GET_CURRENT_FACTORIAL':
			let currentValue = GetFactorial.getFactorial(+payload);
			return Object.assign({}, state, {currentValue});
		default:
			return state;
	}
}
