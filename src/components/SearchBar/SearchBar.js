import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor() {
        super();

        this.getSearchName = this.getSearchName.bind(this);
        this.sendSearchToParent = this.sendSearchToParent.bind(this);

        this.state = {
            search: ''
        };
    }

    getSearchName(event) {
        this.setState({
            search: event.target.value
        });
    }

    sendSearchToParent(search) {
        this.props.parentCallback(this.state.search);
        this.setState({
            search: ''
        });
    }

    render() {
        return(
            <div className="searchbar">
                <input placeholder="Search" value={this.state.search} onChange={this.getSearchName} />
                <button className="fa fa-search" onClick={this.sendSearchToParent} ></button>
            </div>
        );
    }
}

export default SearchBar;