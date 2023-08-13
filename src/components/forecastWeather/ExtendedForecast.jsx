import { useContext } from "react";
import { ExtendedForecastItem } from "./ExtendedForecastItem";
import { AppContext } from "../../App";

export const ExtendedForecast = (props) => {
  const { currentWeather, isCelsius } = useContext(AppContext);

  //console.log(weatherData);

  return (
    <section className="extended-forecast-section weather-section">
      <h3>Extended Forecast</h3>
      <div className="forecast-container">
        <ExtendedForecastItem day="Wen" temp="15°C" clouds="clouds" />
        <ExtendedForecastItem day="Wen" temp="15°C" clouds="clouds" />
        <ExtendedForecastItem day="Wen" temp="15°C" clouds="clouds" />
        <ExtendedForecastItem day="Wen" temp="15°C" clouds="clouds" />
        <ExtendedForecastItem day="Wen" temp="15°C" clouds="clouds" />
      </div>
    </section>
  );
};
/* {props.data.list.splice(0, 7).map((item, index) => {
        <div key={index}>Ahoj</div>;
      })}*/
