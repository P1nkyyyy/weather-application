import { useState, useContext } from "react";
import cityData from "../city.list.json";
import { AppContext } from "../App";

export const Navbar = () => {
  const { query, setQuery, setData, data } = useContext(AppContext);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=44758223122f1f02ff35afd7add211c1`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      cityData
        .filter((city) =>
          city.name.toLowerCase().includes(query.toLocaleLowerCase())
        )
        .map((city) => {
          setData(city.name);
          console.log(city.name);
        });
      setQuery("");
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
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

/* import { useState, useEffect } from "react";
import cityData from "../city.list.json";

export const Navbar = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=44758223122f1f02ff35afd7add211c1`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      async function logMovies() {
        const response = await fetch("../city.list.json");
        const weather = await response.json();
        setData(weather.data);
        console.log(weather);
      }
      logMovies();
      setLocation("");
    }
  };

  return (
    <nav className="navigation">
      <input
        type="text"
        placeholder="City..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchLocation}
      />
    </nav>
  );
};
*/
