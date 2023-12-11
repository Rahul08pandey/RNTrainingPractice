import { INCREMENT_COUNTER, DECREMENT_COUNTER, MULTIPLE_COUNTER } from "../actions/counterActionTypes";

const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: return {
            ...state,
            counter: state.counter + action.payload
        }
        case DECREMENT_COUNTER: return {
            ...state,
            counter: state.counter -1
        }
        // case MULTIPLE_COUNTER: return {
        //     ...state,
        //     counter1: state.counter1 + action.payload
        // }
        default:
            return state;
    }
}

export default counterReducer;