import React from 'react';

const ButtonBar = props => {

    return (
        <div>
            <button aria-label="home" className="fa fa-home"></button>
            <button onClick={props.location} aria-label="location" className="fa fa-compass"></button>
            <button aria-label="settings" className="fa fa-cog"></button>
        </div>
    );
};

export default ButtonBar;