import React, { Component } from 'react';
import iso3166 from 'iso-3166-2';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor() {
        super();

        this.getCityName = this.getCityName.bind(this);
        this.getCountryName = this.getCountryName.bind(this);
        this.sendSearchToParent = this.sendSearchToParent.bind(this);

        this.state = {
            city: '',
            country: ''
        };
    }

    getCityName(event) {
        this.setState({
            ...this.state,
            city: event.target.value
        });
    }

    getCountryName(event) {
        this.setState({
            ...this.state,
            country: event.target.value
        });
    }

    getCountryCode(country) {
        return country ? iso3166.country(country).code : undefined;
    }

    sendSearchToParent(search) {
        this.props.parentCallback(this.state.city, this.getCountryCode(this.state.country));
        this.setState({
            city: '',
            country: ''
        });
    }

    render() {
        return(
            <div className="searchbar">
                <input placeholder="City" value={this.state.city} onChange={this.getCityName} />
                <input placeholder="Country" value={this.state.country} onChange={this.getCountryName} />
                <button className="fa fa-search" onClick={this.sendSearchToParent} ></button>
            </div>
        );
    }
}

export default SearchBar;