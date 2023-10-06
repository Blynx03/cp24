import React, { useState, useEffect } from 'react'
import './rate.css'

const Rate = ({country, countryLibrary}) => {
    const rateKey = 'db4f48ca3bd71239a04e9417ba1b8a81'
    // fixerio key = '9a2d14fac8587a909b42ce969a3b42a8'
    let rateRes = '';
    let baseIso = '';
    let newBaseIso = '';
    let newBaseRate = 0;
    let countryIsoCode = [];
    let countryRate = 0;
    let [ countryRates, setCountryRates ] = useState('');
    let currencyRates = [];

    const findData = countryLibrary.find(data => data.country === country);
    if (findData) {
        baseIso = findData.isoCode
    }
    

    // *** UNCOMMENT ONLY WHEN NEEDED TO REDUCE API CALLS ***
    useEffect(() => {
        async function fetchRateData() {
            try {
                rateRes = await fetch(`http://data.fixer.io/api/latest?access_key=${rateKey}`);
                currencyRates = await rateRes.json();
                countryIsoCode = Object.keys(currencyRates.rates)
                countryRate = Object.values(currencyRates.rates)

                if (currencyRates.base !== baseIso) {
                    countryIsoCode.map((iso, index) => {
                        if (iso === baseIso) {
                            newBaseIso = iso;
                            newBaseRate = countryRate[index];
                        }
                    })
                }
            
                const newCountryRates = [];

                // console.log(newBaseIso)
                // console.log(newBaseRate)

                if (countryIsoCode && countryRate) {
                    console.log(countryIsoCode.length)
                    countryIsoCode.forEach((iso, index) => {
                        newCountryRates.push(<span className='iso-rate' key={index}>{iso.toUpperCase()}: {(countryRate[index]/newBaseRate).toFixed(3)}</span>);
                    })
                }
     
                setCountryRates(newCountryRates)

            } catch (error) {
                console.log('Error fetching rate data:', error)
            }
        }
    }, [baseIso]);

    const startInfiniteScroll = () => {
        let scrollLeft = 0;
        const contentWrapper = document.querySelector('.iso-rate-container')
        const contentElements = document.querySelectorAll('.iso-rate-container span');
        const containerWidth = document.querySelector('.country-rate-container').offsetWidth;
        console.log(containerWidth)

        setInterval(() => {
            scrollLeft++;
            if (scrollLeft > contentElements.length * containerWidth) {
                scrollLeft = 0;
            }
            contentWrapper.style.transform = 'translateX(-${scrollLeft}px)';
        }, 10);

    }

    fetchRateData();
    startInfiniteScroll();

    return (
        <div className='rate-container'>
            <div className='rate-title'>CURRENCY RATES:</div>
            <div className='country-rate-container'>
                <div className='iso-rate-container'>
                    {startInfiniteScroll()}
                </div>
            </div>
        </div>
    )
   

}

export default Rate