import React, { useEffect, useState } from 'react'

const Weather = ({currentDay, weatherData}) => {
    console.log(currentDay)
    console.log(weatherData)
    let [ showWeather, setShowWeather ] = useState([])
    let [ weatherForecast, setWeatherForecast ] = useState([{}])
    // let date = new Date();
    // let hour = date.getHours();
    // let counter = 0;

    // useEffect(() => {
    //     setCurrentTemp(() => {
    //         for(let i = 0; i < 24; i++) {
    //             if (i === hour) {
    //                 return weatherData.forecast.forecastday[i].day.maxtemp_c
    //             }
    //         }
    //     })
    // }, [hour])

    
    function maxTemp(i) {
        return weatherData.forecast.forecastday[i].day.maxtemp_c
    }

    function convertToF(temp) {
        return ((temp * (9/5)) + 32);
    }

    // let weatherForecast = [{}];



    function handleDay(i) {
        switch (weatherForecast[i-1].day) {
            case 'Sun': return 'Mon'
                        break;
            case 'Mon': return 'Tue'
                        break;
            case 'Tue': return 'Wed'
                        break;
            case 'Wed': return 'Thu'
                        break;
            case 'Thu': return 'Fri'
                        break;
            case 'Fri': return 'Sat'
                        break;
            case 'Sat': return 'Sun'
                        break;
        }   
    }

    // To cover the extra two days. Remove when plan is upgraded to Developer or higher plan
    function tempHandleDay(day) {
        switch (day) {
            case 'Sun': return 'Mon'
                        break;
            case 'Mon': return 'Tue'
                        break;
            case 'Tue': return 'Wed'
                        break;
            case 'Wed': return 'Thu'
                        break;
            case 'Thu': return 'Fri'
                        break;
            case 'Fri': return 'Sat'
                        break;
            case 'Sat': return 'Sun'
                        break;
        }   
    }

    useEffect(() => {
        // if(weatherData !== '' || weatherData !== undefined) {
        if (weatherData) {
            if (weatherForecast.length < 5) {
                for (let i = 0; i < weatherData.forecast.forecastday.length; i++) {
                    weatherForecast[i] = 
                        {
                            key: i,
                            day: i === 0 ? currentDay : handleDay(i),
                            condition: weatherData.forecast.forecastday[i].day.condition.text,
                            high: weatherData.location.country !== 'USA' ? maxTemp(i) : convertToF(maxTemp(i)),
                            low: weatherData.location.country !== 'USA' ? weatherData.forecast.forecastday[i].day.mintemp_c : weatherData.forecast.forecastday[i].day.mintemp_f
                        }
                }
                // filler since weather api free plan only gives up to three days --- REMOVE IF UPGRADING TO DEVELOPER PLAN or HIGHER
                weatherForecast[3] = {
                    key: 3,
                    day: tempHandleDay(weatherForecast[2].day),
                    condition: 'Thundery outbreaks possible',
                    high: maxTemp(2) - 1,
                    low: weatherData.forecast.forecastday[2].day.mintemp_c - 1,
                }
                weatherForecast[4] = {
                    key: 4,
                    day: tempHandleDay(weatherForecast[3].day),
                    condition: 'Overcast',
                    high: maxTemp(2) + 1,
                    low: weatherData.forecast.forecastday[2].day.mintemp_c + 1,
                }

            }

        }
        setWeatherForecast(weatherForecast)
    }, [])
    
    useEffect(() => {
        let arrWeather = [];
        if(weatherData !== '' || weatherData !== undefined) {
            arrWeather = weatherForecast.map(({day, condition, high, low}, index) => {
                return (
                <div className='daily-container' key={index}>
                    <div className='day-weather'>{day}</div>
                    <img  className='weather-icon' src={`./images/${condition}.png`} alt='weather icon' />
                    <div className='hi-lo-container'>
                        <div className='hi'>{Math.round(high)}</div>
                        <div className='lo'>{Math.round(low)}</div>
                    </div>
                </div>
                )
            })
            setShowWeather(arrWeather)
        }
    },[])


    return (
        <>
        {!weatherForecast
        ? <div className='daily-container'>Loading...</div> 
        : <>{showWeather}</>
        }
        </>
    )
    
}

export default Weather