import { useContext, useEffect } from "react";
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
    setForecastWeather,
  } = useContext(AppContext);

  const api = {
    key: "44758223122f1f02ff35afd7add211c1",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      cityData
        .filter((city) => city.name.toLowerCase().includes(query.toLowerCase()))
        .map((city) => {
          if (query.toLowerCase() == city.name.toLowerCase()) {
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
    } catch {
      console.log("Multiple fetch failed");
    }
  };

  useEffect(() => {
    fetchData();
  }, [queryData, isCelsius]);

  return (
    <nav className="navigation">
      <label htmlFor="search-bar">
        <img src={search} alt="" />
      </label>

      <input
        id="search-bar"
        type="text"
        placeholder="Search for location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={searchLocation}
      />
    </nav>
  );
};
