import React from 'react';
import './arrow.scss';

const RightArrow = props => {
  return (
    <div onClick={props.nextSlide} className="arrow">
      <span aria-hidden="true"><i className='fa fa-caret-right'></i></span>
    </div>
  );
}

export default RightArrow;