import React, { Component } from 'react';
import iso3166 from 'iso-3166-2'; //Converts country names to codes
import './SearchBar.scss';
import Dropdown from './Dropdown';

class SearchBar extends Component {
    constructor() {
        super();

        this.getCityName = this.getCityName.bind(this);
        this.getCountryName = this.getCountryName.bind(this);
        this.dispatchSearch = this.dispatchSearch.bind(this);

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

    getCountryCode = country => country ? iso3166.country(country).code : undefined;

    dispatchSearch() {
        this.props.searchAction(this.state.city, this.state.country);
        this.setState({
            city: '',
            country: ''
        });
    }

    render() {
        const { city, country } = this.state;

        return(
            <div className="searchbar">
                <input id='country' aria-label="city" placeholder="City" value={city} onChange={this.getCityName} />
                {/* <input aria-label="country" placeholder="Country" value={country} onChange={this.getCountryName} /> */}
                <Dropdown getCountry={this.getCountryName}/>
                <button disabled={!city} name="search" aria-label="search" className="fa fa-search" onClick={this.dispatchSearch} ></button>
            </div>
        );
    }
}

export default SearchBar;