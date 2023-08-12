import { useContext } from "react";
import cloud from "../assets/cloud.svg";
import { AppContext } from "../App";
import CityList from "../city.list.json";

export const BasicStatsCurrent = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="basic-stats">
      <h4>
        {data.name}, {data?.country}
      </h4>
      <p>Wednesday, 4:48 PM</p>
      <div className="temperature-container">
        <span className="temperature">{data.main?.feels_like}</span>
        <img src={cloud} alt="" />
      </div>
      <p>{data.weather}</p>
    </div>
  );
};
