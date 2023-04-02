import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, region, flags} = props.country;
    return (
        <div className='country'>
           <h1>Name: {name.common}</h1>
           <img src={flags.png} alt="" />
           <h5>Capital: {capital}</h5>
           <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;