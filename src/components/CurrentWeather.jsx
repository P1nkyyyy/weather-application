import React from "react";
import { BasicStatsCurrent } from "./BasicStatsCurrent";
import { MoreStatsCurrent } from "./MoreStatsCurrent";

export const CurrentWeather = () => {
  return (
    <section className="current-weather-section">
      <h3>Current Weather</h3>
      <div className="current-weather-container">
        <BasicStatsCurrent />
        <MoreStatsCurrent />
      </div>
    </section>
  );
};
