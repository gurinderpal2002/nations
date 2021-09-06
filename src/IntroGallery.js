import React from 'react';
import Img1 from './img/pic1.jpg';
import Img2 from './img/pic10.jpg';


const Intro = () => {

    return (
        <div className="intro intro__gallery">

            <img alt="globe" src={Img1} className="intro__gallery--photo intro--photo-1" />

            <img alt="united nations" src={Img2}className="intro__gallery--photo intro--photo-2" />

        </div>


    );

}


export default Intro;