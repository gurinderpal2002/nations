import React from 'react';
import Img1 from './img/img10.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img12.jpg';
import Img6 from './img/img13.jpg';
import Img7 from './img/img1.jpg';
import Img8 from './img/img8.jpg';



const MultipleImages = () => {

    

        return ( 
    
                <section className="section-images">
                    <figure className="image image-1">
                        <img alt="world country images" className="img" src={Img1}/>
                    </figure>
                    <figure className="image image-2">
                        <img alt="world country images" className="img" src={Img2}/>
                    </figure>
                    <figure className="image image-3">
                        <img alt="world country images" className="img" src={Img3}/>
                    </figure>
                    <figure className="image image-4">
                        <img alt="world country images" className="img" src={Img4}/>
                    </figure>
                    <figure className="image image-5">
                        <img alt="world country images" className="img" src={Img5}/>
                    </figure>
                    <figure className="image image-6">
                        <img alt="world country images" className="img" src={Img6}/>
                    </figure>
                    <figure className="image image-7">
                        <img alt="world country images" className="img" src={Img7}/>
                    </figure>
                    <figure className="image image-8">
                        <img alt="world country images" className="img" src={Img8}/>
                    </figure>
                    
                </section>
                
            );

    

}


export default MultipleImages;