import React from 'react';
import { connect }from 'react-redux';
//stylesheets
import './Slider.scss';
//Components

const Slider = props =>  {
    const { children, count } = props;

    return (
        <div className='outer'>
            <div className="container" style={{width:'100%'}}>
                <div style={count === 0 ? {display: 'flex'} : {display:'none'}}>{children[0]}</div>
                <div style={count === 1 ? {display: 'flex'} : {display:'none'}}>{children[1]}</div>
                <div style={count === 2 ? {display: 'flex'} : {display:'none'}}>{children[2]}</div>
                <div style={count === 3 ? {display: 'flex'} : {display:'none'}}>{children[3]}</div>
                <div style={count === 4 ? {display: 'flex'} : {display:'none'}}>{children[4]}</div>    
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.sliderCount
    };
}
  
export default connect(mapStateToProps)(Slider);