import {combineReducers} from 'redux';
import {FORM} from './form';
import {appStep} from './step';

export default combineReducers({FORM, appStep});

export const getStep = state => state.appStep.step;

export const getAllForm = state => state.FORM;
