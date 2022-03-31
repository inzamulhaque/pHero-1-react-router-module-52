import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h2>Welcome to my world</h2>
            {
                countries.map((country, index) => <Country key={index} name={country.name.common} capital={country.capital} official={country.name.official} />)
            }
        </div>
    );
};

export default Countries;