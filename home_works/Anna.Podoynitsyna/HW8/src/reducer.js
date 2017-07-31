import MathService from './math_logic/math.service';

export default function counter(state = { count: 1, number: 1}, action){
    switch (action.type) {
        case 'INCREMENT':
            state = MathService.increment(state);
           /* state.count = state.count*state.number;
            state.number += 1;*/
            return state;  
        case 'DECREMENT':
            state = MathService.decrement(state);
            /*state.number -= 1;
            state.count = state.count/state.number;*/
            return state;
        default:
            return state;
    }
}


