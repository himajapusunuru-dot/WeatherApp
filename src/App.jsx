import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCities } from "./data";
import SearchDropdown from "./dropdown/dropdown";
import { backgroundImage } from "./backgroundimages";

function App() {
  const [data, setData] = useState({ weather: [{ main: "" }] });
  const [location, setLocation] = useState("");
  const [loader, setLoader] = useState(false);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  //fetching all cities data
  useEffect(() => {
    const loadCities = async () => {
      try {
        const citiesData = await getCities();
        setCities(citiesData);
        setLoader(true)
      } catch (error) {
        setError("Failed to load cities");
      }
    };

    loadCities();
  }, []);

  //api for fetching weather report in specific location
  const searchLocation = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=93f26e3c57081a6210de53b8dcfdfea4`;
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  return (
    <main>
      <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage(data.weather[0].main)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="search">
        <h2>Get Weather Updates</h2>
        <SearchDropdown
          className="container"
          cities={cities}
          searchLocation={searchLocation}
          loader={loader}
        />
      </div>
      {data.weather[0].main.length == 0 ? (
        <div></div>
      ) : (
        <div className="container bottom">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </main>
    
  );
}

export default App;
