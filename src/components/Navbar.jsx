import { useState, useContext, useEffect } from "react";
import cityData from "../city.list.json";
import { AppContext } from "../App";
import search from "../assets/search.svg";

export const Navbar = () => {
  const {
    query,
    setQuery,
    setQueryData,
    queryData,
    setWeatherData,
    isCelsius,
    setIsCelsius,
  } = useContext(AppContext);

  const api = {
    key: "44758223122f1f02ff35afd7add211c1",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      cityData
        .filter((city) =>
          city.name.toLowerCase().startsWith(query.toLowerCase())
        )

        .map((city) => {
          if (query === city.name) {
            console.log(city);
            setQueryData(city);
            setQuery("");
          } else {
            console.log("Špatné město");
          }
        });
    }
  };

  useEffect(() => {
    fetch(
      `${api.base}weather?lat=${queryData.coord?.lat}&lon=${
        queryData.coord?.lon
      }&units=${isCelsius ? "metric" : "imperial"}&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
  }, [queryData, isCelsius]);

  return (
    <nav className="navigation">
      <img src={search} alt="" />
      <input
        type="text"
        placeholder="Search for location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={searchLocation}
      />
    </nav>
  );
};

/* import { useState, useContext } from "react";
import cityData from "../test.list.json";
import { AppContext } from "../App";

export const Navbar = () => {
  const { query, setQuery, setData, data } = useContext(AppContext);

  const api = {
    key: "44758223122f1f02ff35afd7add211c1",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setQuery("");
          console.log(data);
        });
      cityData.map((city) => {
        console.log(city);
      });
    }
  };

  return (
    <nav className="navigation">
      <input
        type="text"
        placeholder="City..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={searchLocation}
      />
    </nav>
  );
};
*/
