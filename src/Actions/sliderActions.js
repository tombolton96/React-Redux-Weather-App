import * as types from './sliderActionTypes';

export function setSlide(slide) {
    return {type: types.SET_SLIDE, slide:slide};
}