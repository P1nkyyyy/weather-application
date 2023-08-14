import { useContext } from "react";
import { MoreStatsItem } from "./MoreStatsItem";
import {
  WindIcon,
  RaindropIcon,
  PressureIcon,
} from "../../assets/MoreStatsIcons";
import { AppContext } from "../../App";

export const MoreStatsCurrent = () => {
  const { currentWeather, isCelsius } = useContext(AppContext);

  return (
    <div className="more-stats">
      <p className="more-stats-feels-like">
        Feels like {Math.round(currentWeather.main?.feels_like)}{" "}
        {isCelsius ? "°C" : "°F"}
      </p>
      <MoreStatsItem
        text="Humidity"
        value={`${currentWeather.main.humidity}%`}
        img={<RaindropIcon />}
      />
      <MoreStatsItem
        text="Wind"
        value={`${Math.round(currentWeather.wind.speed)}${
          isCelsius ? "m/s" : "mph"
        }`}
        img={<WindIcon />}
      />
      <MoreStatsItem
        text="Pressure"
        value={`${Math.round(currentWeather.main.pressure)}hpa`}
        img={<PressureIcon />}
      />
    </div>
  );
};
