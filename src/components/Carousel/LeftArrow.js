import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <i aria-hidden="true">&#10094;</i>
    </div>
  );
}

export default LeftArrow;