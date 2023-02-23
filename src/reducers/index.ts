import { combineReducers } from 'redux';

// Reducers
import login from './login';
import posts from './posts';

export default combineReducers({ login, posts });
