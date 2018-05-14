import * as types from './sliderActionTypes';

export function nextSlide() {
    return {type: types.CHANGE_SLIDE, count: +1};
}

export function prevSlide() {
    return {type: types.CHANGE_SLIDE, count: -1};
}