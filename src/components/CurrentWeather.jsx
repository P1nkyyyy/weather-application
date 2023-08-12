import { useContext } from "react";
import { BasicStatsCurrent } from "./BasicStatsCurrent";
import { MoreStatsCurrent } from "./MoreStatsCurrent";
import { AppContext } from "../App";

export const CurrentWeather = () => {
  const { weatherData } = useContext(AppContext);

  return (
    <section className="current-weather-section">
      <div className="current-weather-header">
        <h3>Current Weather</h3>
        <div className="toggle-button-cover">
          <div id="button-3" className="button r">
            <input className="checkbox" type="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>

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
