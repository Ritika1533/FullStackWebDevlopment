import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Weather() {
  const [place, setPlace] = useState("deoghar");
  let WEATHER_API_KEY = process.env.REACT_APP_LOCAL_WEATHER_API_KEY;

  const getWeatherData = async () => {
    if (place && place.length > 0) {
      try {
        // let url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=59fb175943564434ff0a25f37096c57d`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.name);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [place]); // Include place in the dependencies array

  return (
    <div className='Weather-body'>
      <div className='search-bar'>
        <input
          type='search'
          placeholder='City Name'
          className='search-input'
          onChange={(e) => setPlace(e.target.value)}
        />
        <button onClick={getWeatherData}><SearchIcon/></button>
      </div>
    </div>
  );
}

