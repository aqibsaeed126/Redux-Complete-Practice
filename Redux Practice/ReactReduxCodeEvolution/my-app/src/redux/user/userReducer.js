import { USER_FETCH, USER_FETCH_SUCCESS, USER_FETCH_FAIL } from "./userTypes"

const initState = {
    loading: false,
    users: [],
    error: []
}

export const userReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_FETCH:
            return {
                ...state,
                loading: true,
            }
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: []
            }
        case USER_FETCH_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload,
                users:[]
            }
        default:
            return initState;

    }
}