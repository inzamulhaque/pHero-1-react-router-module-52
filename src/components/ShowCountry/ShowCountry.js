import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowCountry = () => {
    const [country, setCountry] = useState([]);
    const { countryName } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [countryName]);

    return (
        <div>
            <h1>{country[0]?.name?.common}</h1>
        </div>
    );
};

export default ShowCountry;