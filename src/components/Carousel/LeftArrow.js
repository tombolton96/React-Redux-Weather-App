import React, { Component } from 'react';
import './arrow.scss';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="arrow">
      <span aria-hidden="true">&#10094;</span>
    </div>
  );
}

export default LeftArrow;