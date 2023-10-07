import React, { useState } from 'react'
import { useEffect } from 'react';
import './ad.css'

const Ad = () => {
  const [ addImage, setAddImage ] = useState('');
  const [ counter, setCounter ] = useState(1);

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function showAd() {
//  For github to work, / in front of images is removed.     
    setAddImage('images/ad-img/ad' + counter + '.png');
    checkWidth(counter)
    await delay(5000)

    const nextCounter = counter >= 9 ? 1 : counter + 1;
    setCounter(nextCounter);
  }

  useEffect(() => {
    showAd()
  },[counter])


  const checkWidth = (counter) => {
    const setAdWidth = document.querySelector('.ad-image')
    let width = '100%';
    let scale = 1;
    let left = 0;
    let top = 0;

    switch (counter) {
      case 1: width = '70vw';
              left = '0';
              top = '0';
              break;
      case 2: width = '65vw';
              left = '0';
              top = '-30px';  
              break;
      case 3: width = '71vw';
              left = '40px';
              top = '10px';  
              scale = '1.08';
              break;
      case 4: width = '65vw';
              left = '0';
              top = '0';  
              break;
      case 5: width = '65vw';
              left = '0';  
              top = '-70px'; 
              scale = '1'; 
              break;
      case 6: width = '65vw';
              left = '0';
              top = '-110px';  
              break;
      case 7: width = '65vw';
              left = '20px';
              top = '-130px';
              scale = '1.1';
              break;
      case 8: width = '60vw'
              left = '0';
              top = '-20px';  
              scale = '1.3';
              break;
      case 9: width = '65vw';
              left = '40px';
              top = '0'; 
              scale = '1.14';
              break; 
      default: break;
    }
    setAdWidth.style.width = width;
    setAdWidth.style.scale = scale;
    setAdWidth.style.left = left;
    setAdWidth.style.top = top;
  }

  useEffect(() => {
        const setScale = document.querySelector('.ad-image');
        if (window.screen.width <= 1500) {
                let scale = counter === 1 ? 1.4 : counter === 3 ? 1.6 : counter === 9 ? 1.6 : 1
                setScale.style.transform = `scale(${scale})`;
        } 
        // if (window.screen.width <= 1500) {
        //         let setScale = document.querySelector('.ad-image');
        //         switch(counter) {
        //                 case 1: scale = '1.4';
        //                         break;
        //                 case 3: scale = '1.6';
        //                         break;
        //                 case 9: scale = '1.6';
        //                         break;
        //                 default: break;
        //         }
        //              setScale.style.scale = scale;

  },[counter]);
 

  return (
    <div className='ad-container'>
      <img className='ad-image' src={addImage} alt='Advertisement' />
     </div>
  )
}

export default Ad