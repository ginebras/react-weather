import React, { useState, useEffect } from 'react';
import './styles.css';

import WeatherDetails from './weatherDetails';

export default function SearchMain() {
  const [city, setCity] = useState('mumbai');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherData = async () => {
    try {
      let req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d5489e889d95e98e40b748f187c37490`
      );
      let data = await req.json();
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="city name..."
            id="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button className="searchButton" onClick={getWeatherData}>
          search{' '}
        </button>
      </div>
      <WeatherDetails {...tempInfo} />
    </>
  );
}
