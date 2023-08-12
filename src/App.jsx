import { useState, createContext } from "react";
import { Navbar } from "./components/Navbar";
import { WeatherForNextDays } from "./components/WeatherForNextDays";
import { CurrentWeather } from "./components/CurrentWeather";
import "./style.css";

export const AppContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  return (
    <div className="weather-app">
      <AppContext.Provider
        value={{
          query,
          setQuery,
          queryData,
          setQueryData,
          weatherData,
          setWeatherData,
        }}
      >
        <Navbar />
        <CurrentWeather />
        <WeatherForNextDays />
      </AppContext.Provider>
    </div>
  );
}

export default App;
