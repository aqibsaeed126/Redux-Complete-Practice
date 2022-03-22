import {BUY_CAKE} from "./cakeTypes"
const initState = {
    numOfCakes: 9
}

export const cakeReducer = (state = initState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload,
        }
        default:
            return state

    }
};