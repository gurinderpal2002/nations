import React from 'react';
import Video from './img/vid.mp4';


const BackgroundVideo = () => {
  
    return(
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={Video} type="video/mp4"/>
                Your browser is not supported!
            </video>
        </div>
    );


}


export default BackgroundVideo;