import {BUY_ICECREAM} from "./icecreamTypes"
const initState = {
    numOfIcecreams: 9
}

export const icecreamReducer = (state = initState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1,
        }
        default:
            return state

    }
};