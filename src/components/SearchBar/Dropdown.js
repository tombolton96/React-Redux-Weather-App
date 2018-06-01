import React, { Component } from 'react';
import iso3166 from 'iso-3166-2';

class Dropdown extends Component {
    constructor() {
        super();

        this.createOptions = this.createOptions.bind(this);
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
                <option key={country.code} value={country.code} aria-label="city-dropdown">{country.name}</option>
            );
        });
    }

    render() {
        const { getCountry } = this.props;

        return (
            <select onChange={getCountry}>
                <option value={null}>Select Country</option>
                {this.createOptions(this.getCountries())}
            </select>
        );
    }
}

export default Dropdown;