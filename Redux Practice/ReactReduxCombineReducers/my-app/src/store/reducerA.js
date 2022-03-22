
const initialState = {
    a: 1,
}
const reducerA = (state = initialState, action) => {
    if (action.type === 'UPDATEA') {
        return {
            ...state,
            a: state.a + action.b
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducerA;