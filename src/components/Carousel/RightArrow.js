
import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i aria-hidden="true">&#10095;</i>
    </div>
  );
}

export default RightArrow;