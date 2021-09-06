import React,{useEffect, useState} from 'react';
import ImageHover from './ImageHover';

const PopUp = (props) => {


    const [url, setUrl] = useState('https://en.wikipedia.org/wiki/List_of_sovereign_states');


    useEffect(() => {

        const searchString = props.country.split(' ').join('_');
        setUrl(`https://en.wikipedia.org/wiki/${searchString}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);





    return (
        <div className="popup">
            <div className="popup__content">
                    <button onClick={e => props.onCloseButton()} className="popup__close">&times;</button>
                    <h2 className="popup-heading heading-tertiary u-margin-bottom-vsmall u-center-text">{props.country}</h2>

                    <ImageHover  country={props.country} />

                    <div className="wiki-button">
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn--main btn--animated">Go to Wiki</a>
                    </div>


            </div>

        </div>
    );


}


export default PopUp;