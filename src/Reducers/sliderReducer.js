import initialState from './initialState';
import { SET_SLIDE } from '../Actions/sliderActionTypes';

export default function sliderCount(state = initialState.sliderCount, action) {
    let newState;
    switch(action.type) {
        case SET_SLIDE:
            newState = action.slide;
            return newState;
        default:
            return state;
    }
}