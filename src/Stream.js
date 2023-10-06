import React, { useRef } from 'react'
import './stream.css'
import YouTube from 'react-youtube'

const Stream = () => {
  const playRef = useRef(null)
  const videoOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0 // Autoplay
    }
  };

  function playYt() {
    if (playRef.current) {
      console.log(playRef.current)
      playRef.current.internalPlayer.playVideo();
    }
  }

  return (
    <div className='stream-container'>
        <YouTube className='visual-container' onClick={playYt} videoId='U1tkEfIwJhU' ref={playRef} opts={videoOpts} />
        <img className='stream-logo' src="images/89dmz-logo.png" alt="DMZ logo" />
        {/* <div className='play-yt-btn' onClick={playYt}>PLAY</div> */}
    </div>
  )
}

export default Stream