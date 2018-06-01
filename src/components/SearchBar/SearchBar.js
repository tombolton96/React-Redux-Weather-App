import React, { Component } from 'react';
import iso3166 from 'iso-3166-2';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor() {
        super();

        this.getCity = this.getCity.bind(this);
        this.getCountry = this.getCountry.bind(this);
        this.dispatchSearch = this.dispatchSearch.bind(this);

        this.state = {
            city: '',
            country: ''
        };
    }

    getCity(event) {
        this.setState({
            ...this.state,
            city: event.target.value
        });
    }

    getCountries() {
        const countries = [];

        for (let d in iso3166.data) {
            const country = {
                name: iso3166.data[d].name,
                code: d
            };
            countries.push(country);
        }
        return countries;
    }

    createOptions(countries) {
        return countries.map((country) => {
            return (
                <option key={country.code} value={country.code}>{country.name}</option>
            );
        });
    }

    getCountry(event) {
        this.setState({
            ...this.state,
            country: event.target.value
        });
    }

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
                <input id='country' aria-label="city" placeholder="City" value={city} onChange={this.getCity} />
                
                <select aria-label="city-dropdown" name="country" value={country} onChange={this.getCountry}>
                    <option value="" disabled hidden>Select Country</option>
                    {this.createOptions(this.getCountries())}
                </select>

                <button disabled={!city} name="search" aria-label="search" className="fa fa-search" onClick={this.dispatchSearch} ></button>
            </div>
        );
    }
}

export default SearchBar;