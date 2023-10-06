import React, { useState } from 'react'
import Stream from './Stream'
import DateWeather from './DateWeather'
import Ad from './Ad'
import Chat from './Chat'
import News from './News'
import Event from './Event'
import Rate from './Rate'
import './home.css'
import countryLibrary from './assets/countryLibrary'
import token from './token'

const Home = () => {
  let [ location, setLocation ] = useState('');
  let [ country, setCountry ] = useState('');
  let [ localNewsHeadline, setLocalNewsHeadline ] = useState([])
  let event = [];
  let { weather } = token;


  // Date and Weather API 
  const ipUrl = `https://api.weatherapi.com/v1/ip.json?key=${weather}&q=auto:ip`


  return (
    <div className='main-page'>
        <Stream />
        <DateWeather ipUrl={ipUrl} 
                    weatherKey={weather}
                    location={location} 
                    setLocation={setLocation} 
                    setCountry={setCountry}/>
        <News country={country} localNewsHeadline={localNewsHeadline} setLocalNewsHeadline={setLocalNewsHeadline} event={event}/>
        <Ad />
        <Chat />
        <Event country={country} localNewsHeadline={localNewsHeadline} setLocalNewsHeadline={setLocalNewsHeadline}/>
        <Rate country={country} countryLibrary={countryLibrary}/>
    </div>
  )
}

export default Home