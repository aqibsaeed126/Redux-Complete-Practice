

export const loading = (val) => {
    return {type: 'LOADING', value: val}
}

export const ageUpAsync = (val) => {
    return {type: 'AGEUP', value: val}
}

export const ageUp = (val) => {
    return dispatch => {
        dispatch(loading(true));
        setTimeout(()=>{
            dispatch(ageUpAsync(val));
            dispatch(loading(false));
        }, 5000)
    }
}

export const ageDown = (val) => {
    return {type: 'AGEUP', value: val}
}