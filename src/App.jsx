import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { WeatherForNextDays } from "./components/WeatherForNextDays";
import { CurrentWeather } from "./components/CurrentWeather";
import "./style.css";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=44758223122f1f02ff35afd7add211c1`;

  async function logMovies() {
    const response = await fetch(url);
    const weather = await response.json();
    console.log(weather);
  }
  logMovies();
  return (
    <div className="weather-app">
      <Navbar />
      <CurrentWeather />
      <WeatherForNextDays />
    </div>
  );
}

export default App;
