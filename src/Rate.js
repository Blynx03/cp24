import React, { useState, useEffect } from 'react'
import './rate.css'
import token from './token'

const Rate = ({country, countryLibrary}) => {
    const { weather, news, rate } = token;
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
                rateRes = await fetch(`https://data.fixer.io/api/latest?access_key=${rate}`);
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
        fetchRateData();
    }, [baseIso]);


    return (
        <div className='rate-container'>
            <div className='rate-title'>CURRENCY RATES:</div>
            <div className='country-rate-container'>
                <div className='iso-rate-container'>
                    {countryRates}
                </div>
            </div>
        </div>
    )
   

}

export default Rate