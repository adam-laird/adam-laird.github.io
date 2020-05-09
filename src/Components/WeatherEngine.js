import React, { useState, useEffect } from "react";

import TopBarWeatherText from "./WeatherCard/weatherText";

const WeatherEngine = ({ defaultLocation }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
    description: null,
    timezone: null,
    firstHour: null,
    secondHour: null,
  });

  const setNewSearch = (search) => {
    getWeather(search);
  };

  const getWeather = async (q) => {
    setLoading(true);
    // weather response
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=5560e13322a467495b0570013f6d52de`
      );
      const resJSON = await apiRes.json();
      var lat = resJSON.coord.lat;
      var lon = resJSON.coord.lon;
      try {
        const oneAPI = await fetch(`
      https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=
5560e13322a467495b0570013f6d52de`);
        const oneRes = await oneAPI.json();
        setWeather({
          city: resJSON.name,
          country: resJSON.sys.country,
          temp: resJSON.main.temp.toFixed(1),
          condition: resJSON.weather[0].main,
          description: resJSON.weather[0].description,
          timezone: oneRes.timezone,
          firstHour: oneRes.hourly[1],
          secondHour: oneRes.hourly[3],
          thirdHour: oneRes.hourly[5],
        });
      } catch (error) {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(defaultLocation);
  }, [defaultLocation]);

  return (
    <div>
      {!error ? (
        <TopBarWeatherText
          weather={weather}
          SearchCity={setNewSearch}
          loading={loading}
        />
      ) : (
        <div style={{ color: "black" }}>
          There has been an error
          <br />
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default WeatherEngine;

//  return (
//    <div>
//      {!loading && !error ? (
//        <WeathercardContainer
//          weather={weather}
//          SearchCity={setNewSearch}
//          loading={loading}
//        >
//          ;
//        </WeathercardContainer>
//      ) : loading ? (
//        <div style={{ color: "black" }}>Loading</div>
//      ) : !loading && error ? (
//        <div style={{ color: "black" }}>
//          There has been an error
//          <br />
//          <button onClick={() => setError(false)}>Reset</button>
//        </div>
//      ) : null}
//    </div>
//  );
//
