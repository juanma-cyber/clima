import React from 'react';

const WeatherCard = ({ city, temperature }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperatura actual: {temperature}°C</p>
    </div>
  );
};

export default WeatherCard;
