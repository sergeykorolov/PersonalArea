import {combineReducers, createStore} from "redux";
import contactsReducer from "./contacts-reducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    contactsPage: contactsReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;