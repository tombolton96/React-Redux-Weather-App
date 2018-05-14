import initialState from './initialState';
import { CHANGE_SLIDE } from '../Actions/sliderActionTypes';

export default function sliderCount(state = initialState.sliderCount, action) {
    let newState;
    switch(action.type) {
        case CHANGE_SLIDE:
            newState = state + action.count;
            return newState;
        default:
            return state;
    }
}