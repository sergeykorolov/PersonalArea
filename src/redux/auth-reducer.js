import {authApi} from "../api/api";

const LOGIN = 'LOGIN';

let initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state;
    }
}

export const loginUser = (isAuth) => ({type: LOGIN, isAuth});

export const login = (email, password) => (dispatch) => {
    authApi.login(email, password)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(loginUser(true));
            }
        })
}

export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(loginUser(false));
            }
        })
}

export default authReducer;