import React, { Component } from 'react';
import './arrow.scss';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="arrow">
      <span aria-hidden="true">&#10095;</span>
    </div>
  );
}

export default RightArrow;