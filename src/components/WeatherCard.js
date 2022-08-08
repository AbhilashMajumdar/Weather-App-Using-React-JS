import React, { useEffect, useState } from 'react';

const WeatherCard = (props) => {

    const [weatherState, setWeatherState] = useState("");

    const { tempMax, tempMin, pressure, humidity, temp, feelsLike, cityName, sunrise, sunset, country, speed, weatherMood } = props.weatherInfo;

    let sunsetSec = sunset;
    let sunsetDate = new Date(sunsetSec * 1000);
    let sunsetTime = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`;

    let sunriseSec = sunrise;
    let sunriseDate = new Date(sunriseSec * 1000);
    let sunriseTime = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;

    let date = new Date().toDateString();
    let time = new Date().toLocaleTimeString();

    console.log(weatherState);

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherState("fa-solid fa-cloud");
                    break;

                case "Haze":
                    setWeatherState("fa-solid fa-smog");
                    break;

                case "Thunderstorm":
                    setWeatherState("fa-solid fa-cloud-bolt");
                    break;

                case "Mist":
                    setWeatherState("fa-solid fa-smog");
                    break;

                case "Clear":
                    setWeatherState("fa-solid fa-cloud-sun");
                    break;

                case "Drizzle":
                    setWeatherState("fa-solid fa-cloud-rain");
                    break;

                case "Rain":
                    setWeatherState("fa-solid fa-cloud-rain");
                    break;

                default:
                    setWeatherState("fa-solid fa-sun");
                    break;
            }
        }
    }, [weatherMood]);

    return (
        <>
            <div className="row justify-content-center py-4" style={{ "fontWeight": "600", "fontSize": "18px" }}>
                <div className="col-md-5 col-10">

                    {/* min, max, feels like - weather mood  */}
                    <div className="row pt-4" style={{ "backgroundColor": "white" }}>
                        <div className="col-md-4 two-side-sections">
                            <div>
                                <i className="fas fa-temperature-low" style={{ "color": "turquoise", "fontSize": "40px" }}></i>
                            </div>

                            <div>
                                <span>{tempMin}&deg;C</span> <br />
                                <span>(Min)</span>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div>
                                <i class={weatherState} style={{ "color": "turquoise", "fontSize": "80px" }}></i>
                            </div>
                            <div className='mt-3'>
                                <span>Feels like {feelsLike}&deg;C</span>
                            </div>
                        </div>

                        <div className="col-md-4 two-side-sections">
                            <div>
                                <i className="fas fa-temperature-high" style={{ "color": "turquoise", "fontSize": "40px" }}></i>
                            </div>

                            <div>
                                <span>{tempMax}&deg;C</span> <br />
                                <span>(Max)</span>
                            </div>
                        </div>
                    </div>

                    {/* temperature, city, country, date, time  */}
                    <div className="row py-4 temp" style={{ "backgroundColor": "white" }}>
                        <div className="col-md-7 text-center text-light bg-dark px-3 py-3">
                            <div className="row">
                                <div className="col-md-6 pt-3">
                                    <h1>{temp}&deg;C</h1>
                                </div>
                                <div className="col-md-6">
                                    <h4 className='text-light'>{weatherMood}</h4>
                                    <h4>{cityName}, {country}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 text-center pt-4" style={{ "backgroundColor": "turquoise" }}>
                            <h5>{date}</h5>
                            <h5>{time}</h5>
                        </div>
                    </div>

                    {/* sunrise, sunset, humidity, pressure, wind  */}
                    <div className="row pb-4" style={{ "backgroundColor": "white" }}>
                        <div className="col-md-3 temp-value">
                            <div>
                                <i className="far fa-sun" style={{ "fontSize": "20px", "color": "turquoise" }}></i>
                            </div>
                            <div>
                                <span>Sunrise</span> <br />
                                <span>{sunriseTime} AM</span>
                            </div>
                        </div>

                        <div className="col-md-3 temp-value">
                            <div>
                                <i className="fas fa-sun" style={{ "fontSize": "20px", "color": "turquoise" }}></i>
                            </div>
                            <div>
                                <span>Sunset</span> <br />
                                <span>{sunsetTime} PM</span>
                            </div>
                        </div>

                        <div className="col-md-3 temp-value">
                            <div>
                                <i className="fas fa-snowflake" style={{ "fontSize": "20px", "color": "turquoise" }}></i>
                            </div>
                            <div className='text-center'>
                                <span>Humidity</span> <br />
                                <span>{humidity}%</span>
                            </div>
                        </div>

                        <div className="col-md-3 temp-value">
                            <div>
                                <i className="fas fa-cloud-showers-heavy" style={{ "fontSize": "20px", "color": "turquoise" }}></i>
                            </div>
                            <div className='text-center'>
                                <span>Pressure</span> <br />
                                <span>{pressure} MM</span>
                            </div>
                        </div>

                        <div className="col-md-3 temp-value">
                            <div>
                                <i className="fas fa-wind" style={{ "fontSize": "20px", "color": "turquoise" }}></i>
                            </div>
                            <div className='text-center'>
                                <span>Wind</span> <br />
                                <span>{speed}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard