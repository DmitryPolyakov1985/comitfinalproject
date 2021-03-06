import React from 'react';
import './FiveDayForm.css'

function FiveDayForm(props) {
    return (
        <form className='form' onSubmit={props.fetchFiveDayForecast} >
            <input
                onChange={props.handleCityInput}
                value={props.city}
                id='city' 
                type="text"
                name="city"
                placeholder="City"
            />
            <input
                onChange={props.handleCountryInput}
                value={props.country}
                id='country'
                type="text"
                name="country"
                placeholder="Country"
            />
            <button className='getWeatherBtn'>Get Weather</button>
        </form>
    );
}

export default FiveDayForm;