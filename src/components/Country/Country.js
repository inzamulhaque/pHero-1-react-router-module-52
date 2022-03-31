import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ name, capital, official }) => {
    const navigate = useNavigate();
    const handleCountry = name => {
        navigate(`/showCountry/${name}`);
    }
    return (
        <div>
            <h2>{name}</h2>
            <h3>{official}</h3>
            <h5>{capital}</h5>
            <button onClick={() => handleCountry(name)}>Click Me</button>
        </div>
    );
};

export default Country;