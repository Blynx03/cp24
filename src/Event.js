import React, { useState, useEffect } from 'react'
import './event.css'

const Event = ({localNewsHeadline}) => {
  let [ localHeadlines, setLocalHeadlines ] = useState([]);

  useEffect(() => {
    const allLocalHeadlines = [];
    if (localNewsHeadline.length <= 10) {
      //localNewsHeadline.articles.forEach((news, index) => {  ---- this is the original code without the hard coded articles in "NewsBrowser" was added
      // the following line is the edited one to make the program work.
      localNewsHeadline.forEach((news, index) => {
        allLocalHeadlines.push(
          <>
            <span className='local-news' key={index}>{news}</span>
            <span className='event-news-bullet'> ● </span>
          </>
        )
      })
      setLocalHeadlines(allLocalHeadlines)
    }
  },[localNewsHeadline]);  

  // if (localNewsHeadline) {
  //   const allLocalHeadlines = [];
  //   localNewsHeadline.articles.forEach(news => {
  //     allLocalHeadlines.push(<span className='local-news'>{news.title}</span>)
  //   })
  //   setLocalHeadlines(allLocalHeadlines)
  // }
 
  return (
      <div className='event-container'>
          <div className='event-title'>LOCAL NEWS:</div>
          {/* <div className='events'>{localNewsHeadline}</div> */}
          {/* <div className='events'>Hello Trial</div> */}
          <div className='event-news-container'>
            <div className='all-event-news-container'>
              {localHeadlines}
            </div>
          </div>
      </div>
  )
}

export default Event