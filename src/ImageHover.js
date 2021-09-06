import React,{useState, useEffect} from 'react';
import unsplash from './unsplash';
import Loader from './Loader';

const ImageHover = (props) => {
 
    const [countryImages, setCountryImages] = useState([]);

    const display = async () => {

        const response = await unsplash.get('/search/photos', {
            params: { query: props.country, per_page: 3, orientation: "landscape"}
          });

          setCountryImages(response.data.results);
    
        }

    useEffect( () =>{

        
        display();
    
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
        

    },[]);
    


      
    if(countryImages.length > 0)
    {
        const countryimages = countryImages.map((image,i) => {
            return <img alt="country" key={`img---${i+1}`} src={image.urls.small} className={`image__composition-img image__composition-img--${i+1}`}/>;
        });

        return <div className="image__composition">{countryimages}</div>;
    }
        
    else
        return <Loader size="small"/>


}


export default ImageHover;