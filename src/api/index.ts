import axios from 'axios';

import { API as baseURL } from '../constants/links';

const API = axios.create({ baseURL });

API.interceptors.request.use(req => {
    const locale = sessionStorage.getItem('profile');

    // If logged in
    if (locale) req.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;

    return req;
});

export const login = (credentials: Record<string, string>) => API.post('/users/login', credentials);
export const createUser = (credentials: Record<string, any>) => API.put('/users/new', credentials);
export const deleteUser = (username: string) => API.delete('/users/remove/' + username);
