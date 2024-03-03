import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { IoIosCloudy } from 'react-icons/io';
import { BsFillCloudHaze2Fill } from 'react-icons/bs';
import { WiCloudy } from 'react-icons/wi';
import { IoMdPartlySunny } from 'react-icons/io';
import { IoMdCloud } from 'react-icons/io';

export default function Weather() {
  const [place, setPlace] = useState('');
  const [placeData, setPlaceData] = useState(null);
  let WEATHER_API_KEY = process.env.REACT_APP_LOCAL_WEATHER_API_KEY;
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const getWeatherData = async () => {
    if (place && place.length > 0) {
      try {
        // let url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=59fb175943564434ff0a25f37096c57d`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        setPlaceData(data);
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
          type='text'
          placeholder=' City Name'
          className='search-input'
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <button onClick={getWeatherData}>
          <IoSearchSharp />
        </button>
      </div>
      {placeData && placeData.weather && placeData.weather.length > 0 && (
        <div className='row'>
          <div className='section1'>
            <div className='section11'>
              {placeData.weather[0].main === 'Clouds' && <IoIosCloudy className='weathericon' />}
              {placeData.weather[0].main === 'Haze' && <BsFillCloudHaze2Fill className='weathericon' />}
              {placeData.weather[0].main === 'Smoke' && <WiCloudy className='weathericon' />}
              {placeData.weather[0].main === 'Sunny' && <IoMdPartlySunny className='weathericon' />}
              {placeData.weather[0].main === 'Clear' && <IoMdCloud className='weathericon' />}
              <p className='temp'>{(placeData.main.temp - 273.15).toFixed(1)}<span>°C</span></p>
            </div>
            <div className='section11'>
              <p className='city'>{placeData?.name}</p>
              <p className='weathertype'>{placeData?.weather[0].main}</p>
            </div>
          </div>

          <div className='timediv'>
            <p className='time'>{currentTime}</p>
          </div>
        </div>
      )}

      
     {placeData && placeData.main && typeof placeData.main.temp !== 'undefined' && (
      <div className='section2'>
        <div className='section21'>
          <p className='head1'>Temperature</p>
          <p className='head2'>{(placeData.main.temp - 273.15).toFixed(1)}<span>  °C</span></p>
        </div>

        <div className='section21'>
          <p className='head1'>Temperature Min</p>
          <p className='head2'>{(placeData.main.temp_min - 273.15).toFixed(1)} <span>°C</span></p>
        </div>

        <div className='section21'>
          <p className='head1'>Temperature Min</p>
          <p className='head2'>{(placeData.main.temp_max - 273.15).toFixed(1)} <span>°C</span></p>
        </div>

        <div className='section21'>
          <p className='head1'>Humidity</p>
          <p className='head2'>{placeData?.main.humidity}</p>
        </div>

        <div className='section21'>
          <p className='head1'>Pressure</p>
          <p className='head2'>{placeData?.main.pressure}</p>
        </div>

        <div className='section21'>
          <p className='head1'>Visibility</p>
          <p className='head2'>{placeData?.visibility}</p>
        </div>

        <div className='section21'>
          <p className='head1'>Wind Speed</p>
          <p className='head2'>{placeData?.wind.speed}</p>
        </div>
      </div>
    )}
  </div>
);
}