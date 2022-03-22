const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk  = require("redux-thunk").default;
const axios = require('axios');

const initStore = {
    users: [],
    loading: true,
    error: {}
}


const USER_ACTION_FETCH = 'USER_ACTION_FETCH';
const USER_ACTION_SUCCESS = 'USER_ACTION_SUCCESS';
const USER_ACTION_ERROR = 'USER_ACTION_ERROR';

const fetchUserRequest = ()=> {
    return {
        type: USER_ACTION_FETCH
    }
}

const fetchUserSuccess = (users)=> {
    return {
        type: USER_ACTION_SUCCESS,
        value: users
    }
}

const fetchUserFailure = (error)=> {
    return {
        type: USER_ACTION_ERROR,
        value: error
    }
}


const reducer = (state = initStore, action)=> {
    switch(action.type) {
        case USER_ACTION_FETCH:
            return {
                ...state,
                loading: true,
            }
        case USER_ACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.value,
                error: ''
            } 
        case USER_ACTION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.value,
                users: []
            } 

    }

}

const fetchUsers = () => {
    console.log('fetching user . . . ');
    return dispatch => {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(fetchUserSuccess(response.data.map((user)=>user.id)));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(fetchUsers);