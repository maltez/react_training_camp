import MathService from './business_logic/math.service'
export default function counter(state = 0, action){
    switch (action.type) {
        case 'INCREMENT': 
            state = MathService.increment(state);
            return state;
        case 'DECREMENT':
            state = MathService.decrement(state);
            return state; 
        default:
            return state;
    }
}