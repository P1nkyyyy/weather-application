import { useContext } from "react";
import { ExtendedForecastItem } from "./ExtendedForecastItem";
import { AppContext } from "../../App";

export const ExtendedForecast = (props) => {
  const { currentWeather, isCelsius } = useContext(AppContext);

  const dailyTemp = props.data.list.filter((item) =>
    item.dt_txt.includes("12:00")
  );

  return (
    <section className="extended-forecast-section weather-section">
      <h3>Extended Forecast</h3>
      <div className="forecast-container">
        {dailyTemp.map((item, index) => (
          <ExtendedForecastItem
            key={index}
            day={`${new Date(item.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}`}
            temp={`${Math.round(item.main.temp)} °C`}
            clouds={item.weather[0].main}
            img={`icons/${item.weather[0].icon}.png`}
          />
        ))}
      </div>
    </section>
  );
};
/* */
