import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';

import { AuthData } from '../types/ReducersTypes';

import jwtDecode from 'jwt-decode';

import * as api from '../api';
import { AUTH, LOGOUT } from '../constants';

// Login function
export const login = (formData: AuthData, navigate: NavigateFunction) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const { data } = await api.login(formData);

        dispatch({ type: AUTH, payload: data });

        navigate("/virus");
        navigate(0);
    } catch (error) {
        if (error instanceof AxiosError)
            window.alert(`Error ${error.response?.status} : ${error.response?.data.message}`);

        // Reinit stored data
        window.location.reload();
    }
};

export const isLoggedIn = (): boolean => {
    const token = sessionStorage.getItem('token');
    let status = false;

    if (token && sessionStorage.getItem('profile') !== null) {
        if (Math.floor(Date.now()/1e3) - jwtDecode<{ iat: number, id: string, username: string }>(token).iat > 3600) {
            sessionStorage.clear();
            window.location.replace('/');
        } else status = true;
    }

    return status;
};

export const logout = () => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: LOGOUT });
    window.location.replace('/');
};
