import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './date-weather.css'
import Weather from './Weather'
import Timer from './Timer'


const DateWeather = ({ipUrl, weatherKey, location, setLocation, setCountry}) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    // const [ data, setData ] = useState({})
    const weatherData = useRef({})
    let day = (days[date.getDay()]);
    let month = (months[date.getMonth()]);
    let currentDate = (`${day} ${month} ${date.getDate()}`);
   

    useEffect(() => {
        let ipRes = '';
        async function fetchData() {
            try {
                ipRes = await fetch(ipUrl)
                ipRes = await ipRes.json()
                setLocation(ipRes.city)
                setCountry(ipRes.country_name)
                return ipRes
                // .catch(console.error)
            } catch (error) {
                console.log('Error Loading: ', error)
            }
        };
        async function fetchForecast() {
            try {
                let forecastRes = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${ipRes.city}&days=10&aqi=no`)
                forecastRes = await forecastRes.json()
                return forecastRes
            } catch (error) {
                console.log('Error Loading: ', error)
            }
        }

        async function fetchBoth() {
            await fetchData();
            return await fetchForecast();
            // setData(tempData)
         
        }
        
        async function loadingData() {
            weatherData.current = await fetchBoth()
            // setWeatherData(weatherData)
            runJsx()
        }
    loadingData()
    }, [location])

    function runJsx() {
        const root = ReactDOM.createRoot(document.querySelector('.location-weather-container'))
        root.render(weatherData.current
                ? <>
                    <div className='location'>{location}</div>
                    <div className='weather-container'>
                        <Weather currentDay={day} weatherData={weatherData.current} />
                    </div>
                </>
                :  <div className='weather-container' style={{color:'white'}}>Loading...</div> )
    }

    return (        
            <div className='date-temp-container'>
                <div className='date-time-logo-container'>
                    <div className='date'>{currentDate}</div>
                    <Timer className='time' />
                    <img className='dmz-logo' src='./images/89dmz-logo.png' alt='DMZ Logo'/>
                </div>
                <div className='location-weather-container'>
                </div>
            </div>
    )
    
}


export default DateWeather