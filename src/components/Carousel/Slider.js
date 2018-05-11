import React, { Component } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './slider.scss'; 

class Slider extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
        count: 0,
        arrows: props.arrows
    };
  }

  next() {
      this.state.count === 4
        ? this.setState({...this.state})
        : this.setState({ 
            ...this.state,  
            count: (5 + this.state.count + 1) % 5
        });
  }

  prev() {
    this.state.count === 0 
        ? this.setState({...this.state})
        : this.setState({ 
            ...this.state,
            count: this.state.count - 1
        });
  }

  render() {
    const { count, arrows, isLoading } = this.state,
        { children } = this.props;

    return isLoading ? (<div>Loading...</div>) : (
        <div className="outer">
            <div style={count === 0 ? {visibility: 'hidden'} : {visibility: 'visible'} 
                && arrows === false ? {display: 'none'} : {display: 'initial'}}>
                <LeftArrow previousSlide={this.prev} />
            </div>
            <div className="slider" >
                <div style={count === 0 ? {display: 'flex'} : {display:'none'}}>{children[0]}</div>
                <div style={count === 1 ? {display: 'flex'} : {display:'none'}}>{children[1]}</div>
                <div style={count === 2 ? {display: 'flex'} : {display:'none'}}>{children[2]}</div>
                <div style={count === 3 ? {display: 'flex'} : {display:'none'}}>{children[3]}</div>
                <div style={count === 4 ? {display: 'flex'} : {display:'none'}}>{children[4]}</div>    
            </div>
            <div style={count === 4 ? {visibility: 'hidden'} : {visibility: 'visible'}
                && arrows === false ? {display: 'none'} : {display: 'initial'}}>
                <RightArrow nextSlide={this.next} />
            </div>
        </div>
    );
  }
}
  
export default Slider;