export default function weather(state = [], action){
    switch (action.type) {
        case 'FETCH_DATA':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}


