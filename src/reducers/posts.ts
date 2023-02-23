import { PostActions } from '../types/ReducersTypes';

import { GET } from '../constants';

const actions: PostActions = (state = { formData: null }, action) => {
    switch (action.type) {
        case GET:
            localStorage.setItem(action.storage||'temp', JSON.stringify(action.payload));
            return { ...state, loading: false, errors: null };

        default:
            return state;
    }
};

export default actions;
