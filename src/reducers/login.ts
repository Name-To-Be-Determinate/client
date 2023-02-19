import { AuthActions } from '../types/ReducersTypes';

import { redirect } from 'react-router-dom';

import { AUTH } from '../utils/constants';

const actions: AuthActions = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            sessionStorage.setItem('profile', JSON.stringify(action.payload?.user));
            sessionStorage.setItem('token', JSON.stringify(action.payload?.token));
            setTimeout(() => redirect('/'), 250);
            return { ...state, authData: action?.payload, loading: false, errors: null };

        default:
            return state;
    }
};

export default actions;
