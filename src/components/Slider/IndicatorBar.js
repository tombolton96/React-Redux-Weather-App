import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sliderActions from '../../Actions/sliderActions';
import './indicator.scss';

const InidicatorBar = props => {
    const { sliderActions, slideNo, sliderCount } = props;

    function setSlide() {
        sliderActions.setSlide(slideNo); 
    }

    function getDay(num) {
        const today = new Date().getDay();
        let day;

        switch(num) {
            case 0:
                day = today;
                break;
            case 1:
                day = (today + 1 + 7)%7;
                break;
            case 2:
                day = (today + 2 + 7)%7;
                break;
            case 3:
                day = (today + 3 + 7)%7;
                break;
            case 4:
                day = (today + 4 + 7)%7;
                break;
            default:
                day = undefined;
                break;
        }
        
        switch(day) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thur';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            default:
                return undefined;
        }
    }

    return (
        <div onClick={setSlide} className={sliderCount === slideNo ? 'selected' : 'notselected'}>

            {getDay(slideNo)}
            
        </div>
    );
}

function mapStateToProps(state) {
    return {
        sliderCount: state.sliderCount
    };
}

function mapDispatchToProp(dispatch) {
    return {
        sliderActions: bindActionCreators(sliderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProp)(InidicatorBar);