import { useState, createContext } from "react";
import { Navbar } from "./components/Navbar";
import { ExtendedForecast } from "./components/forecastWeather/ExtendedForecast";
import { CurrentWeather } from "./components/currentWeather/CurrentWeather";
import "./style.css";

export const AppContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);

  return (
    <div className="weather-app">
      <AppContext.Provider
        value={{
          query,
          setQuery,
          queryData,
          setQueryData,
          currentWeather,
          setCurrentWeather,
          isCelsius,
          setIsCelsius,
          forecastWeather,
          setForecastWeather,
        }}
      >
        <Navbar />
        <CurrentWeather />
        <ExtendedForecast data={forecastWeather} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
