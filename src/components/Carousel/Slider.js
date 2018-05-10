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
        count: 0
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
    return this.state.isLoading ? (<div>Loading...</div>) : (
        <div className="wrapper">
            <div style={this.state.count === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}><LeftArrow previousSlide={this.prev} /></div>
            <div className="slider" >
                <div style={this.state.count === 0 ? {display: 'flex'} : {display:'none'}}>{this.props.children[0]}</div>
                <div style={this.state.count === 1 ? {display: 'flex'} : {display:'none'}}>{this.props.children[1]}</div>
                <div style={this.state.count === 2 ? {display: 'flex'} : {display:'none'}}>{this.props.children[2]}</div>
                <div style={this.state.count === 3 ? {display: 'flex'} : {display:'none'}}>{this.props.children[3]}</div>
                <div style={this.state.count === 4 ? {display: 'flex'} : {display:'none'}}>{this.props.children[4]}</div>    
            </div>
            <div style={this.state.count === 4 ? {visibility: 'hidden'} : {visibility: 'visible'}}><RightArrow nextSlide={this.next} /></div>
        </div>
    );
  }
}
  
export default Slider;