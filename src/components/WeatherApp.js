import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../templates/WeatherCard';
import '../index.css';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'f651e5d42cffc3a39d1c626829510074'; // Reemplaza con tu API key del servicio de clima
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        setTemperature(response.data.main.temp);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos del clima', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container" style={{ backgroundImage: 'url("/images/joldeon-3.PNG")' }}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Ingrese el nombre de la ciudad"
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        temperature && <WeatherCard city={city} temperature={temperature} />
      )}
    </div>
  );
};

export default WeatherApp;

