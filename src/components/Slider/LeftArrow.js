import React from 'react';
import './arrow.scss';

const LeftArrow = props => {
  return (
    <div onClick={props.previousSlide} className="arrow">
      <span aria-hidden="true"><i className='fa fa-caret-left'></i></span>
    </div>
  );
}

export default LeftArrow;