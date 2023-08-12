import React from "react";

export const MoreStatsItem = (props) => {
  return (
    <div className="more-stats-item">
      {props.img}
      <span className="more-stats-text">{props.text}</span>
      <span className="more-stats-value">{props.value}</span>
    </div>
  );
};
