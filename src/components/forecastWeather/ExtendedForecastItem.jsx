import React from "react";
import pic from "../../../public/icons/01d.png";

export const ExtendedForecastItem = (props) => {
  return (
    <div className="forecast-item">
      <h4 className="forecast-day">{props.day}</h4>
      <img className="forecast-icon" src={pic} alt="" />
      <p className="forecast-climate">{props.clouds}</p>
      <p className="forecast-temp">{props.temp}</p>
    </div>
  );
};
