import { createStore } from "redux";

const initialState = {
    age: 30,
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'ADD') {
        newState.age += action.val;
    }
    if (action.type === 'SUBTRACT') {
        newState.age -= action.val;
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(()=> {
    console.log(store.getState());
})
store.dispatch({type: 'ADD', val: 10});
store.dispatch({type: 'ADD', val: 12});
store.dispatch({type: 'SUBTRACT', val: 8});