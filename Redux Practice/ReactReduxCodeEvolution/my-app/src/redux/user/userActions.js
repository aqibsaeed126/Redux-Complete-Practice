import { USER_FETCH, USER_FETCH_SUCCESS, USER_FETCH_FAIL } from "./userTypes";
import axios from 'axios'; 
const userFetch = ()=>{
    return {
        type: USER_FETCH,
    }
}

const userFetchSuccess = (users)=>{
    return {
        type: USER_FETCH_SUCCESS,
        payload: users
    }
}

const userFetchFail = (error)=>{
    return {
        type: USER_FETCH_FAIL,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userFetch());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                dispatch(userFetchSuccess(response.data));
            })
            .catch((error)=>{
                dispatch(userFetchFail(error.message));
            })
    }
}