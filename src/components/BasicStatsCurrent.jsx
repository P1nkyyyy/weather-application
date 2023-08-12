import { useContext, useState, useEffect } from "react";
import cloud from "../assets/cloud.svg";
import { AppContext } from "../App";
import { getDate } from "./GetDate";

export const BasicStatsCurrent = () => {
  const { queryData, weatherData } = useContext(AppContext);
  const [currentDate, setCurrentDate] = useState(getDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(getDate());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="basic-stats">
      <h4 className="city-name">
        {queryData.name}, {queryData.country}
      </h4>
      <p className="current-date">{currentDate}</p>
      <div className="temperature-container">
        <span className="city-temperature">
          {Math.round(weatherData.main?.temp)}°C
        </span>
        <img src={cloud} alt="" />
      </div>
      <p className="city-weather-type">{weatherData.weather[0].description}</p>
    </div>
  );
};
