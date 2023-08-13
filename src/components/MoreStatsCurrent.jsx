import { useContext } from "react";
import { MoreStatsItem } from "./MoreStatsItem";
import { WindIcon, RaindropIcon } from "../assets/MoreStatsIcons";
import { AppContext } from "../App";

export const MoreStatsCurrent = () => {
  const { weatherData } = useContext(AppContext);

  // Icon udělat pomoci Weather.icon

  return (
    <div className="more-stats">
      <p className="more-stats-feels-like">
        Feels like {Math.round(weatherData.main?.feels_like)}°C
      </p>
      <MoreStatsItem
        text="Humidity"
        value={`${weatherData.main.humidity}%`}
        img={<RaindropIcon />}
      />
      <MoreStatsItem
        text="Wind"
        value={`${Math.round(weatherData.wind.speed)}kph`}
        img={<WindIcon />}
      />
      <MoreStatsItem
        text="Pressure"
        value={`${Math.round(weatherData.main.pressure)}mBar`}
        img={<WindIcon />}
      />
    </div>
  );
};
