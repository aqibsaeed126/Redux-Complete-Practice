import createStore from 'redux';

const initialState = {
    age: 21,
    history: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    const newState = {... state};

    if (action.type === 'AGEUP') {
        return {
            ...state,
            age: state.age + 1,
            history: state.history.concat({id: Math.random(), age: state.age+1})
        }
    }

    if (action.type === 'AGEDOWN') {
        return {
            ...state,
            age: state.age - 1,
            history: state.history.concat({id: Math.random(), age: state.age-1})
        }
    }

    if (action.type === 'DELAGE') {
        return {
            ...state,
            age: state.age - 1,
            history: state.history.filter(item => item.id != action.value)
        }
    }

    if (action.type === 'LOADING') {
        newState.loading = action.value;
    }

    return newState;
}

export default reducer;