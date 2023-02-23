import { AxiosError } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import * as api from '../api';
import { GET, POST } from '../constants';

export const get = (formType: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const { data } = await api.getPosts(formType);

        dispatch({ type: GET, payload: data, storage: formType });
    } catch (error) {
        if (error instanceof AxiosError)
            window.alert(`Error ${error.response?.status}: ${error.response?.data.message}`);
        else console.error(error);
    }
};

export const set = (formType: string, formData: Record<string, any>) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const { data } = await api.setPosts(formType, formData);

        dispatch({ type: POST, payload: formData });

        window.alert(data.message);
    } catch (error) {
        if (error instanceof AxiosError)
            window.alert(`Error ${error.response?.status}: ${error.response?.data.message}`);
        else console.error(error);
    }
};

export function copyToClipbord (text: string) {
    try {
        if (window.navigator.clipboard) {
            var textArea = window.document.createElement('textarea');

            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";

            window.document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                window.document.execCommand('copy');
            } catch (error) {}

            window.document.body.removeChild(textArea);
        }

        window.navigator.clipboard.writeText(text);
    } catch (error) { };
};
