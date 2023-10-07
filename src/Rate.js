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
    let allRates = [];

    const findData = countryLibrary.find(data => data.country === country);
    if (findData) {
        baseIso = findData.isoCode
    }
    

    // *** UNCOMMENT ONLY WHEN NEEDED TO REDUCE API CALLS ***
    useEffect(() => {
        async function fetchRateData() {
            try {
                // rateRes = await fetch(`https://data.fixer.io/api/latest?access_key=${rate}`); --- for fixer.io
                rateRes = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${rate}`);
                currencyRates = await rateRes.json();
                console.log(currencyRates.data)

                // if (currencyRates && currencyRates.rates) {
                //     countryIsoCode = Object.keys(currencyRates.rates)
                //     countryRate = Object.values(currencyRates.rates)
                //     console.log(countryIsoCode)
                //     console.log(countryRate)

                //     if (currencyRates.base !== baseIso) {
                //         countryIsoCode.map((iso, index) => {
                //             if (iso === baseIso) {
                //                 newBaseIso = iso;
                //                 newBaseRate = countryRate[index];
                //             }
                //         });
                //     }
                // }

                Object.keys(currencyRates.data).forEach((isoCode) => {
                    let { code, value } = currencyRates.data[isoCode];
                    allRates = [...allRates, {code: code, value: value}]
                    if (code === baseIso) {
                        newBaseIso = code;
                        newBaseRate = value;
                    }
                })
            
                const newCountryRates = [];

                
                allRates.forEach(({code, value}, index) => {
                    newCountryRates.push(<span className='iso-rate' key={index}>{code.toUpperCase()}: {(value/newBaseRate).toFixed(3)}</span>);
                })
                
     
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