import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import contactsReducer from "./contacts-reducer";
import {reducer as formReducer} from "redux-form";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    contactsPage: contactsReducer,
    auth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;