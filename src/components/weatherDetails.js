import React, { useState, useEffect } from 'react';

export default function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}) {
  const [weatherState, setWeather] = useState('');

  let date = new Date(sunset * 1000);
  let dateStr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case 'Clouds':
          setWeather('wi-day-cloudy');
          break;

        case 'Haze':
          setWeather('wi-fog');
          break;

        case 'Clear':
          setWeather('wi-day-sunny');
          break;

        case 'Mist':
          setWeather('wi-dust');
          break;

        case 'Rain':
          setWeather('wi-day-rain');
          break;

        default:
          setWeather('wi-day-sunny');
          break;
      }
    }
  }, [weatherType]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}º</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherType}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className="extra-info-leftside">
                {dateStr} PM
                <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
