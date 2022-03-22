import { cakeReducer } from "./cakes/cakeReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { userReducer } from "./user/userReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
});

export default rootReducer;
