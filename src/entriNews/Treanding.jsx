
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Treanding = () => {
    const [countries, setCountries] = useState([]);
    const token=localStorage.getItem("token")

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data)})
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        token?
        <div className='grid-container'>
            {countries.map((country, index) => (
                <div key={country.name} className='cardd'>
                    <div className='card-flag-container'>
                        <Link to={country.alpha2Code}>
                            <img className='card-flag' src={country.flag} alt={`${country.name} flag`} />
                        </Link>
                    </div>
                    <div className='card-info'>
                        <h2>{country.name}</h2>
                        <p>Population: <span>{country.population.toLocaleString()}</span> </p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
        : <Navigate to='/login'/>

    );
};

export default Treanding;
