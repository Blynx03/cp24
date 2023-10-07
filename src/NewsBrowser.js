import React, { useState, useEffect } from 'react'
import './news.css'
// import token from './token'

const NewsBrowser = ({country, localNewsHeadline, setLocalNewsHeadline}) => {
  let [ newsHeadline, setNewsHeadline ] = useState('')
  let stopLoop = false;
//   const addClass = 'news-headline news-font-size'
//   let { weather, news } = token;
  
  const countryCode = [
      {
        country: 'Argentina',
        code: 'ar'
      },
      {
        country: 'Australia',
        code: 'au'
      },
      {
        country: 'Austria',
        code: 'at'
      },
      {
        country: 'Belgium',
        code: 'be'
      },
      {
        country: 'Brazil',
        code: 'br'
      },
      {
        country: 'Bulgaria',
        code: 'bg'
      },
      {
        country: 'Canada',
        code: 'ca'
      },
      {
        country: 'China',
        code: 'cn'
      },
      {
        country: 'Colombia',
        code: 'co'
      },
      {
        country: 'Cuba',
        code: 'cu'
      },
      {
        country: 'Czech Republic',
        code: 'cz'
      },
      {
        country: 'Egypt',
        code: 'eg'
      },
      {
        country: 'France',
        code: 'fr'
      },
      {
        country: 'Germany',
        code: 'de'
      },
      {
        country: 'Greece',
        code: 'gr'
      },
      {
        country: 'Hong Kong',
        code: 'hk'
      },
      {
        country: 'Hungary',
        code: 'hu'
      },
      {
        country: 'India',
        code: 'in'
      },
      {
        country: 'Indonesia',
        code: 'id'
      },
      {
        country: 'Ireland',
        code: 'ie'
      },
      {
        country: 'Israel',
        code: 'il'
      },
      {
        country: 'Italy',
        code: 'it'
      },
      {
        country: 'Japan',
        code: 'jp'
      },
      {
        country: 'Latvia',
        code: 'lv'
      },
      {
        country: 'Lithuania',
        code: 'lt'
      },
      {
        country: 'Malaysia',
        code: 'my'
      },
      {
        country: 'Mexico',
        code: 'mx'
      },
      {
        country: 'Morocco',
        code: 'ma'
      },
      {
        country: 'Netherlands',
        code: 'nl'
      },
      {
        country: 'New Zealand',
        code: 'nz'
      },
      {
        country: 'Nigeria',
        code: 'ng'
      },
      {
        country: 'Norway',
        code: 'no'
      },
      {
        country: 'Philippines',
        code: 'ph'
      },
      {
        country: 'Poland',
        code: 'pl'
      },
      {
        country: 'Portugal',
        code: 'pt'
      },
      {
        country: 'Romania',
        code: 'ro'
      },
      {
        country: 'Russia',
        code: 'ru'
      },
      {
        country: 'Saudi Arabia',
        code: 'sa'
      },
      {
        country: 'Serbia',
        code: 'rs'
      },
      {
        country: 'Singapore',
        code: 'sg'
      },
      {
        country: 'Slovakia',
        code: 'sk'
      },
      {
        country: 'Slovenia',
        code: 'si'
      },
      {
        country: 'South Africa',
        code: 'za'
      },
      {
        country: 'South Korea',
        code: 'kr'
      },
      {
        country: 'Sweden',
        code: 'se'
      },
      {
        country: 'Switzerland',
        code: 'ch'
      },
      {
        country: 'Taiwan',
        code: 'tw'
      },
      {
        country: 'Thailand',
        code: 'th'
      },
      {
        country: 'Turkey',
        code: 'tr'
      },
      {
        country: 'UAE',
        code: 'ae'
      },
      {
        country: 'Ukraine',
        code: 'ua'
      },
      {
        country: 'United Kingdom',
        code: 'gb'
      },
      {
        country: 'United States',
        code: 'us'
      },
      {
        country: 'Venezuela',
        code: 've'
      },
    ]
  
//   let localUrl = ''
//   const newsUrl = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${news}`
//   const newsCode = countryCode.find(location => location.country === country);
//   if (newsCode) {
    
//     localUrl = `https://newsapi.org/v2/top-headlines?country=${newsCode.code}&apiKey=${news}`
//   }
  

//   useEffect(() => {
//     async function fetchNewsApi() {
//       let newsData = await fetch(newsUrl)
//       newsData = await newsData.json();
      
//       if (newsData.status === 'ok') {
//         return newsData
//       } else {
//         console.error('Error: ', newsData.code)
//         return newsData.message
//       }
//     }

//     async function fetchLocalNewsApi() {
//       let localNewsData = await fetch(localUrl)
//       localNewsData = await localNewsData.json();
//       console.log(localNewsData)
      
//       if (localNewsData.status === 'ok') {
//         return localNewsData
//       } else {
//         console.error('Error: ', localNewsData.code)
//         return localNewsData.message
//       }
//     }
//     async function loadNewsData() {
//       let getNewsData = await fetchNewsApi();
//       let getLocalNewsData = await fetchLocalNewsApi();

//       runNews(getNewsData)
//       setLocalNewsHeadline(getLocalNewsData)
//     }

//     loadNewsData()
//   },[localUrl])



  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // newsapi doesn't allow request coming from browser (CorsNotAllowed).  getNewsdata need to be hard coded to make the project work
  const articles = [
    {
        title: 'Google Pixel 8 Gets Major Security Upgrade To Compete With iPhone 15 - Forbes',
        source: {
            name: "Google News"
        }
    },
    {
        title: "‘Bear attack bad’: final message of Canadian couple killed by grizzly - The Guardian",
        source: {
            name: "Google News"
        }
    },
    {
        title: "Weight-loss drugs linked to stomach paralysis, other serious gastrointestinal conditions - UBC Faculty of Medicine",
        source: {
            name: "Google News"
        }
    },
    {
        title: "The Blue Jays left their playoff decisions in the hands of an algorithm and paid the price for it — again - Toronto Star",
        source: {
            name: "Google News"
        }
    },
    {
        title: "Special weather statement issued for P.E.I. as Philippe approaches - CBC.ca",
        source: {
            name: "Google News"
        }
    },
    {
        title: "Toronto police set up command post as search steps up for missing senior - CP24",
        source: {
            name: "Google News"
        }
    },
    {
        title: "Reduce, upcycle and repurpose: Celebrate Circular Economy Month and Waste Reduction Week - City of Mississauga",
        source: {
            name: "Google News"
        }
    },
    {
        title: "Updated COVID vaccines, flu shots to be available for eligible groups in London, Ont. - Global News",
        source: {
            name: "Google News"
        }
    },
    {
        title: "India says it's firm on Canada reducing diplomatic staff in the country but sets no deadline - CTV News",
        source: {
            name: "Google News"
        }
    },
    {
        title: "Former Toronto mayor John Tory's relationship with staffer violated city's code of conduct - CTV News Toronto",
        source: {
            name: "Google News"
        }
    },

  ]

  async function runNews(data) {
    let i = 0;
    while (!stopLoop)
      {
        let tempHeadline = data[i].title;
        let newsSource = ` - ${data[i].source.name}`;
        let newNewsHeadline = tempHeadline.replace(newsSource,'');
        setNewsHeadline(newNewsHeadline);

        await delay(9000);
        i++;
        if (i === data.length) {
          i = 0;
        }
      }
      
  }

  // Added for local news headline which is the same as all the articles title
  function getLocalNews(articles) {
    let localNews = [];
    articles.forEach((article) => {
        localNews.push(article.title);
    })
    setLocalNewsHeadline(localNews);
  }

  
  useEffect(() => {
    runNews(articles);
    getLocalNews(articles);
  },[])


  return (
    <div className='news-container'>
        <div className={newsHeadline.length >= 130 ? 'news-headline2' : 'news-headline'}>
          {newsHeadline}  
        </div>
    </div>
  )
}

export default NewsBrowser