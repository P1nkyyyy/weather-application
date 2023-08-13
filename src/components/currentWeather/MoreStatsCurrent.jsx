import { useContext } from "react";
import { MoreStatsItem } from "./MoreStatsItem";
import { WindIcon, RaindropIcon } from "../../assets/MoreStatsIcons";
import { AppContext } from "../../App";

export const MoreStatsCurrent = () => {
  const { currentWeather } = useContext(AppContext);

  // Icon udělat pomoci Weather.icon

  return (
    <div className="more-stats">
      <p className="more-stats-feels-like">
        Feels like {Math.round(currentWeather.main?.feels_like)}°C
      </p>
      <MoreStatsItem
        text="Humidity"
        value={`${currentWeather.main.humidity}%`}
        img={<RaindropIcon />}
      />
      <MoreStatsItem
        text="Wind"
        value={`${Math.round(currentWeather.wind.speed)}kph`}
        img={<WindIcon />}
      />
      <MoreStatsItem
        text="Pressure"
        value={`${Math.round(currentWeather.main.pressure)}mBar`}
        img={<WindIcon />}
      />
    </div>
  );
};
