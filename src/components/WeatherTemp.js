import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import axios from 'axios';

const WeatherTemp = () => {
    const weatherApi = {
        key: "f0f2d734931b4ae3d5e97636e805d35c",
        baseurl: "https://api.openweathermap.org/data/2.5/weather"
    }

    const [city, setCity] = useState("Kolkata");
    const [weatherInfo, setWeatherInfo] = useState({});

    const searchWeather = async () => {
        const url = `${weatherApi.baseurl}?q=${city}&units=metric&appid=${weatherApi.key}`;
        const res = await axios.get(url).catch(err => console.log(err));
        const data = await res.data;

        const { temp_max: tempMax, temp_min: tempMin, pressure, humidity, temp, feels_like: feelsLike } = data.main;

        const { name: cityName } = data;
        const { sunrise, sunset, country } = data.sys;
        const { speed } = data.wind;
        const { main: weatherMood } = data.weather[0];


        const weatherData = {
            tempMax,
            tempMin,
            pressure,
            humidity,
            temp,
            feelsLike,
            cityName,
            sunrise,
            sunset,
            country,
            speed,
            weatherMood
        };

        setWeatherInfo(weatherData);
    };

    useEffect(() => {
        searchWeather();
    }, []);

    return (
        <>
            <div className="row justify-content-center my-5 pt-5">
                <div className="col-md-3 searchbar col-10">
                    <div>
                        <input type="text"
                            className='form-control'
                            placeholder='Enter City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <button className='btn btn-primary' onClick={searchWeather}>Search</button>
                    </div>
                </div>
            </div>

            <WeatherCard weatherInfo={weatherInfo} />
        </>
    )
}

export default WeatherTemp
