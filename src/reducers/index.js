import {combineReducers} from 'redux';
import {FORM} from './form';

export default combineReducers({FORM});

export const getStep = state => state.FORM.step;
