import { INCREMENT_COUNTER, DECREMENT_COUNTER, MULTIPLE_COUNTER } from "./counterActionTypes";
export const incrementCounter = (parameter) => {
    return {
        type: INCREMENT_COUNTER,
        payload: parameter
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER,
    }
}

export const multipleCounter = (parameter) => {
    return {
        type: MULTIPLE_COUNTER,
        payload: parameter,
    }
}