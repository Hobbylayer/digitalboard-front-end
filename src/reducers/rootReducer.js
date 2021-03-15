import { combineReducers } from "redux";
import { pubReducer } from "./pubReducer";
import { authReducer } from "./authReducers";


const rootReducer = combineReducers( {
    "Publicadores": pubReducer,
    "Auth" : authReducer
});

export {
    rootReducer
}