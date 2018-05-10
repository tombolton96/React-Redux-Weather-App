import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayCard from '../DayCard/DayCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
        count: 1
    };
  }

  next() {
      this.setState({ count: this.state.count + 1 });
  }

  prev() {
    this.setState({ count: this.state.count - 1 });
  }  

  render() {
    return (
        <div className="wrapper" onClick={this.next}>
            <LeftArrow previousSlide={this.prev} />
            <div className="slider">
                {this.state.count === 1 ? this.props.children[0] : null}
                {this.state.count === 2 ? this.props.children[1] : null}
                {this.state.count === 3 ? this.props.children[2] : null}
                {this.state.count === 4 ? this.props.children[3] : null}
                {this.state.count === 5 ? this.props.children[4] : null}
            </div>
            <RightArrow nextSlide={this.next} />
        </div>
    );
  }
}