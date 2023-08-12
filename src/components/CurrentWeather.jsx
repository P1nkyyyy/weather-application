import { useContext } from "react";
import { BasicStatsCurrent } from "./BasicStatsCurrent";
import { MoreStatsCurrent } from "./MoreStatsCurrent";
import { AppContext } from "../App";

export const CurrentWeather = () => {
  const { queryData, weatherData } = useContext(AppContext);

  return (
    <section className="current-weather-section">
      <h3>Current Weather</h3>
      <div className="current-weather-container">
        {typeof weatherData.main != "undefined" ? (
          <>
            <BasicStatsCurrent />
            <MoreStatsCurrent />
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
