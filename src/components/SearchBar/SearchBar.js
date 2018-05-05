import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {

    render() {
        return(
            <div className="searchbar">
                <input placeholder="Search" />
                <button className="fa fa-search"></button>
            </div>
        );
    }
}

export default SearchBar;