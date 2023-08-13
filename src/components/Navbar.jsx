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
    setCurrentWeather,
    isCelsius,
    setIsCelsius,
    forecastWeather,
    setForecastWeather,
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
            setQueryData(city);
            setQuery("");
          }
        });
    }
  };

  const fetchData = async () => {
    const array = [
      fetch(
        `${api.base}weather?lat=${queryData.coord?.lat}&lon=${
          queryData.coord?.lon
        }&units=${isCelsius ? "metric" : "imperial"}&appid=${api.key}`
      ),
      fetch(
        `${api.base}forecast?lat=${queryData.coord?.lat}&lon=${
          queryData.coord?.lon
        }&units=${isCelsius ? "metric" : "imperial"}&appid=${api.key}`
      ),
    ];
    try {
      const res = await Promise.all(array);
      const data = await Promise.all(
        res.map((item) => {
          return item.json();
        })
      );
      setCurrentWeather(data[0]);
      setForecastWeather(data[1]);
      console.log(data);
    } catch {
      console.log("Multiple fetch failed");
    }
  };

  useEffect(() => {
    fetchData();
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

/* 
  useEffect(() => {
    fetch(
      `${api.base}forecast/daily?lat=${queryData.coord?.lat}&lon=${queryData.coord?.lon}&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeather(data);
        console.log(data);
      });
  }, [queryData, isCelsius]);*/
