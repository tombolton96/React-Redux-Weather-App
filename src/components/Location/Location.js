// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as locationActions from '../../Actions/locationActions';
// import PropTypes from 'prop-types';
// import React, {Component} from 'react';

// class Location extends Component {
   
//     componentWillMount() {
//         this.props.locationActions.fetchLocation();
//     }

//     render() {
//        return(
//             <div className="location">
//                 Latitude: {this.props.location.latitude}
//                 <br/>
//                 Longitude: {this.props.location.longitude}
//             </div>
//        );
//     }
// }

// Location.propTypes = {
//     locationActions:PropTypes.object,
//     location: PropTypes.object
// };

// function mapStateToProps(state) {
//     return {
//         location: state.location
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         locationActions: bindActionCreators(locationActions,dispatch)
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Location);