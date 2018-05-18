import React from 'react';
import './arrow.scss';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="arrow">
      <span aria-hidden="true">&#9656;</span>
    </div>
  );
}

export default RightArrow;