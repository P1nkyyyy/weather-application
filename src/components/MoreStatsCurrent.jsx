import React from "react";
import { MoreStatsItem } from "./MoreStatsItem";
import { WindIcon, RaindropIcon } from "../assets/MoreStatsIcons";

export const MoreStatsCurrent = () => {
  return (
    <div className="more-stats">
      <p>Feels like 17°</p>
      <MoreStatsItem text="Humidity" value="59%" img={<RaindropIcon />} />
      <MoreStatsItem text="Wind" value="8kph" img={<WindIcon />} />
    </div>
  );
};
