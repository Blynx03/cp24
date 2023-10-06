import React, { useState, useEffect } from 'react'


const Timer = () => {
    const [ date, setDate ] = useState(new Date())
    let hour = (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours());
    let min = (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());
    let sec = (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());

    let currentTime = `${hour}:${min}:${sec}`;


        // for the clock and show running seconds 
        useEffect(() => {
            let timer = setInterval(() => {
                setDate(new Date());
            }, 1000);
            return () => { 
                clearInterval(timer);
            }
        }, []);

  return (
    <div className='time'>{currentTime}</div>
  )
}

export default Timer