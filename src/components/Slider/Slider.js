import React, { Component } from 'react';
import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import * as sliderActions from '../../Actions/sliderActions';
//stylesheets
import './Slider.scss';
//Components
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        arrows: props.arrows
    };
  }

  render() {
    const { arrows, isLoading } = this.state,
        { children, count, sliderActions } = this.props;

    return isLoading ? (<div>Loading...</div>) : (
        <div className='outer'>
            <div style={arrows === false ? {display: 'none'} : {display: 'initial'}
                 && count === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                <LeftArrow previousSlide={sliderActions.prevSlide} />
            </div>
            <div className="container" style={{width:'100%'}}>
                <div style={count === 0 ? {display: 'flex'} : {display:'none'}}>{children[0]}</div>
                <div style={count === 1 ? {display: 'flex'} : {display:'none'}}>{children[1]}</div>
                <div style={count === 2 ? {display: 'flex'} : {display:'none'}}>{children[2]}</div>
                <div style={count === 3 ? {display: 'flex'} : {display:'none'}}>{children[3]}</div>
                <div style={count === 4 ? {display: 'flex'} : {display:'none'}}>{children[4]}</div>    
            </div>
            <div style={arrows === false ? {display: 'none'} : {display: 'initial'}
                && count === 4 ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                <RightArrow nextSlide={sliderActions.nextSlide} />
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        count: state.sliderCount
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sliderActions: bindActionCreators(sliderActions, dispatch)
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Slider);