import React from 'react';
import './arrow.scss';

const LeftArrow = props => {
  return (
    <div onClick={props.previousSlide} className="arrow">
      <span aria-hidden="true">&#9666;</span>
    </div>
  );
}

export default LeftArrow;