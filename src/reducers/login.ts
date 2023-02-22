import { AuthActions } from '../types/ReducersTypes';

import { AUTH, LOGOUT } from '../constants';

const actions: AuthActions = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            sessionStorage.setItem('profile', JSON.stringify(action.payload?.user));
            sessionStorage.setItem('token', JSON.stringify(action.payload?.token));
            return { ...state, authData: action?.payload, loading: false, errors: null };

        case LOGOUT:
            sessionStorage.clear();
            return { errors: null, loading: false };

        default:
            return state;
    }
};

export default actions;
